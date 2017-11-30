import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { fetchServices } from '../actions/index';
import { Route, Switch, withRouter } from 'react-router-dom';

import ServicesIndex from '../containers/services_index';
import ServicesShow from '../containers/services_show';
import EndpointShow from './endpoint_show';

class App extends Component {

    componentDidMount() {
        this.props.fetchServices();
    }

    render() {
        if (!_.isEmpty(this.props.services)) {
            return (
                <div className="row">
                    <div className="col-3">
                        <Navbar services={this.props.services}/>
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route path="/services/:id/:endpoint" component={EndpointShow} />
                            <Route path="/services/:id" component={ServicesShow} />
                            <Route path="/" component={ServicesIndex} />
                        </Switch>
                    </div>
                </div>
            )
        }  else {
            return (
                <div className="alert alert-primary" role="alert">No services found - Please retry!</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { services: state.services };
}

export default withRouter(connect(mapStateToProps, { fetchServices })(App));