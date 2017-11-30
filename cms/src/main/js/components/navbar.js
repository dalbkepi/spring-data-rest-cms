import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.renderService = this.renderService.bind(this);
    }

    renderService(service) {
        return (
            <NavLink className="nav-link" to={`/services/${service.name}`} key={`tab-${service.name}`}>{service.name}</NavLink>
        );
    }

    render() {
        return (
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
                {this.props.services.map(this.renderService)}
            </div>
        )
    }
}

function mapStateToProps({services}) {
    return { services };
}

export default withRouter(connect(mapStateToProps)(Navbar));

