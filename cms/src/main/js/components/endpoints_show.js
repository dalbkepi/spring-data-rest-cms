import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEndpoint } from '../actions';


class EndpointsShow extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { url } = this.props;
        this.props.fetchEndpoint(url);
    }

    renderEndpoint() {
        return _.forEach(this.props.endpoint, function(value, key) {
           <li>{value.firstName}</li>
        });
    }

    render() {
        const { endpoint } = this.props;

        if (_.isEmpty(endpoint)) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                {/*{this.renderEndpoint()}*/}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoint: state.endpoint };
}

export default connect(mapStateToProps, { fetchEndpoint })(EndpointsShow);