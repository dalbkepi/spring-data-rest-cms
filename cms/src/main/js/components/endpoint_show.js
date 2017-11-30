import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEndpoint, fetchEndpoints, fetchEndpointMeta } from '../actions';

class EndpointShow extends Component {
    constructor(props) {
        super(props);
        // const { id } = this.props.match.params;
        // this.props.fetchEndpoints(id);
    }

    componentDidMount() {
        // var url  = this.props.url.replace(/{.*}/, '');
        const { url } = this.props;
        if (!_.isEmpty(url)) {
            this.props.fetchEndpointMeta(url);
            this.props.fetchEndpoint(url.replace(/profile\//, ''));
        }
    }

    renderEndpoint() {
        if (!_.isEmpty(this.props.endpoint_meta)) {
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
    }

    renderEndpointHead() {
        if (!_.isEmpty(this.props.endpoint_meta)) {
            var head = _.map(this.props.endpoint_meta, function(value, key) {
                return <th key={key}>{_.startCase(value)}</th>
            });
            return (
                <tr>
                    {head}
                </tr>
            )
        }
    }

    // render() {
    //     const { endpoint } = this.props;
    //
    //     if (_.isEmpty(endpoint)) {
    //         return <div>Loading...</div>;
    //     }
    //
    // }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <Link to={"/services/" + this.props.match.params.id} className="btn btn-secondary">Back</Link>
                </div>
                <h3>{this.props.match.params.endpoint}</h3>
                <table className="table table-hover table-bordered">
                    <thead>
                    {this.renderEndpointHead()}
                    </thead>
                    <tbody>
                    {this.renderEndpoint()}
                    </tbody>
                </table>
            </div>
        )
    }

    // renderEndpointsContent (firstKey) {
    //     return _.map(this.props.endpoints, function(value, key) {
    //         var firstClass = (key == firstKey) ? 'show active' : ''
    //         return (
    //             <div key={key+"-content"} className={"tab-pane fade " + firstClass} id="home" role="tabpanel" aria-labelledby="home-tab">
    //                 <EndpointsShow url={value.href} />
    //             </div>
    //         )
    //     });
    // }
}
function mapStateToProps(state) {
    return { endpoint: state.endpoint, endpoints: state.endpoints, endpoint_meta: state.endpoint_meta };
}

export default connect(mapStateToProps, { fetchEndpoint, fetchEndpoints, fetchEndpointMeta})(EndpointShow);