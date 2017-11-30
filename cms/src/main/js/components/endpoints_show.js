import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEndpoint, fetchEndpointMeta } from '../actions';


class EndpointsShow extends Component {

    constructor(props) {
        super(props);

    }


}

function mapStateToProps(state) {
    return { endpoint: state.endpoint, endpoint_meta: state.endpoint_meta };
}

export default connect(mapStateToProps, { fetchEndpoint, fetchEndpointMeta })(EndpointsShow);