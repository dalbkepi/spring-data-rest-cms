import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from './spinner';
import { fetchEndpoint, fetchEndpoints, fetchEndpointMeta } from '../actions';

class EndpointShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 1
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        const { url } = this.props.location.state;
        if (!_.isEmpty(url)) {
            this.props.fetchEndpointMeta(url);
            this.props.fetchEndpoint(url.replace(/profile\//, ''), this.state.pageSize);
        }
    }

    handleChange(e) {
        e.preventDefault();
        var pageSize = e.target.value;
        if (/^[0-9]+$/.test(pageSize)) {
            if (pageSize !== this.state.pageSize) {
                const { url } = this.props.location.state;
                this.props.fetchEndpoint(url.replace(/profile\//, ''), pageSize);
            }
        } else {
            ReactDOM.findDOMNode(this.refs.pageSize).value =
                pageSize.substring(0, pageSize.length - 1);
        }
        this.setState({pageSize});
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
                {/*<input ref="pageSize" defaultValue={this.state.pageSize} onInput={this.handleChange} />*/}
                <select value={this.state.pageSize} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                {this.renderTable()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { endpoint: state.endpoint, endpoints: state.endpoints, endpoint_meta: state.endpoint_meta };
}

export default connect(mapStateToProps, { fetchEndpoint, fetchEndpoints, fetchEndpointMeta})(EndpointShow);