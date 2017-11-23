import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEndpoint, fetchEndpointMeta } from '../actions';


class EndpointsShow extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // var url  = this.props.url.replace(/{.*}/, '');
        const { url } = this.props;
        this.props.fetchEndpointMeta(url);
        this.props.fetchEndpoint(url.replace(/profile\//, ''));
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

    render() {
        const { endpoint } = this.props;

        if (_.isEmpty(endpoint)) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        {this.renderEndpointHead()}
                    </thead>
                    <tbody>
                        {this.renderEndpoint()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoint: state.endpoint, endpoint_meta: state.endpoint_meta };
}

export default connect(mapStateToProps, { fetchEndpoint, fetchEndpointMeta })(EndpointsShow);