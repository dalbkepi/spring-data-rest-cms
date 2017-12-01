import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../components/spinner';
import { fetchEndpoints } from '../actions/index';

class ServicesShow extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchEndpoints(id);
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.location.pathname !== this.props.location.pathname){
            const { id } = nextProps.match.params;
            this.props.fetchEndpoints(id);
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    handleClick(key, href) {
        const { id } = this.props.match.params;
        this.props.history.push("/services/"+id+"/"+key, {url:href});
    }

    renderEndpointsTab() {
        var that = this;
        return _.map(this.props.endpoints, function(value, key) {
            return (
                <li className="nav-item" key={key+"-tab"}>
                    <a className="nav-link" onClick={(e) => that.handleClick(key, value.href, e)} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{key}</a>
                </li>
            )
        });
    }


    render() {
        const { endpoints } = this.props;

        if (_.isEmpty(endpoints)) {
            return <Spinner/>;
        }

        return (
            <div>
                <div className="mb-3">
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
                <h3>Endpoints</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {this.renderEndpointsTab()}
                </ul>
                <div className="alert alert-primary" role="alert">Please choose an endpoint</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoints: state.endpoints };
}

export default connect(mapStateToProps, { fetchEndpoints })(ServicesShow);