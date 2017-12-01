import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from './spinner';
import { fetchEndpoint, fetchEndpoints, fetchEndpointMeta } from '../actions';

class EndpointShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { url } = this.props.location.state;
        if (!_.isEmpty(url)) {
            this.props.fetchEndpointMeta(url);
            this.props.fetchEndpoint(url.replace(/profile\//, ''));
        }
    }

    renderEndpoint() {
        var that = this;
        return _.map(this.props.endpoint, function(value, key) {
            if (!_.isEmpty(value)) {
                var names = _.map(that.props.endpoint_meta, function(v, k) {
                    return (
                        <td key={k}>{value[v]}</td>
                    )
                });
                return (
                    <tr key={key}>
                        {names}
                    </tr>
                )
            }
        });
    }

    renderEndpointHead() {
        var head = _.map(this.props.endpoint_meta, function(value, key) {
            return <th key={key}>{_.startCase(value)}</th>
        });
        return (
            <tr>
                {head}
            </tr>
        )
    }

    renderTable() {
        if (!_.isEmpty(this.props.endpoint_meta)) {
            return (
                <table className="table table-hover table-bordered">
                    <thead>
                    {this.renderEndpointHead()}
                    </thead>
                    <tbody>
                    {this.renderEndpoint()}
                    </tbody>
                </table>
            )
        }
        return (
            <Spinner/>
        )
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <Link to={"/services/" + this.props.match.params.id} className="btn btn-secondary">Back</Link>
                </div>
                <h3>{"Endoint: " + this.props.match.params.endpoint}</h3>
                {this.renderTable()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { endpoint: state.endpoint, endpoints: state.endpoints, endpoint_meta: state.endpoint_meta };
}

export default connect(mapStateToProps, { fetchEndpoint, fetchEndpoints, fetchEndpointMeta})(EndpointShow);