import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServices } from '../actions';

class ServicesIndex extends Component {
    componentDidMount() {
        this.props.fetchServices();
    }

    renderServices() {
        return _.map(this.props.services, service => {
            return (
                <li className="list-group-item" key={service.name}>
                    <Link to={`/services/${service.name}`}>
                        {service.name}
                    </Link>
                </li>
            )
        });
    }

    render() {
        if (!_.isEmpty(this.props.services)) {
            return (
                <div>
                    {/*<div className="text-xs-right">*/}
                    {/*<Link className="btn  btn-primary" to="/services/new">Add a Service</Link>*/}
                    {/*</div>*/}
                    <h3>Services</h3>
                    <ul className="list-group">
                        {this.renderServices()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Services</h3>
                    <div className="alert alert-primary" role="alert">
                            No services found - Please retry!
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { services: state.services };
}

export default connect(mapStateToProps, { fetchServices })(ServicesIndex);