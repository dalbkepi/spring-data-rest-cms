import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEndpoints, deleteService } from '../actions';

class EndpointShow extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.match.params.endpoint}</h3>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { endpoints: state.endpoints };
}

export default connect(mapStateToProps, { fetchEndpoints, deleteService })(EndpointShow);