import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEndpoints, deleteService } from '../actions';
import  EndpointsShow  from './endpoints_show';

class ServicesShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchEndpoints(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deleteService(id, () => {
            this.props.history.push('/');
        });
    }

    renderEndpointsTab(firstKey) {
        const { id } = this.props.match.params;
        return _.map(this.props.endpoints, function(value, key) {
            var firstClass = (key == firstKey) ? 'show active' : ''
            return (
                <li className="nav-item" key={key+"-tab"}>
                    <Link to={"/services/"+id+"/"+key} className={"nav-link " + firstClass}>{key}</Link>
                    {/*<a className={"nav-link " + firstClass} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{key}</a>*/}
                </li>
            )
        });
    }
    renderEndpointsContent (firstKey) {
        return _.map(this.props.endpoints, function(value, key) {
            var firstClass = (key == firstKey) ? 'show active' : ''
            return (
                <div key={key+"-content"} className={"tab-pane fade " + firstClass} id="home" role="tabpanel" aria-labelledby="home-tab">
                    <EndpointsShow url={value.href} />
                </div>
            )
        });
    }

    render() {
        const { endpoints } = this.props;

        if (_.isEmpty(endpoints)) {
            return <div>Loading...</div>;
        }
        var firstKey = Object.keys(this.props.endpoints)[0];

        return (
            <div>
                <div className="mb-3">
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
                {/*<button*/}
                    {/*className="btn btn-danger pull-xs-right"*/}
                    {/*onClick={this.onDeleteClick.bind(this)}*/}
                {/*>*/}
                    {/*Delete Service*/}
                {/*</button>*/}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {this.renderEndpointsTab(firstKey)}
                </ul>
                {/*<div className="tab-content" id="myTabContent">*/}
                    {/*{this.renderEndpointsContent(firstKey)}*/}
                {/*</div>*/}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoints: state.endpoints };
}

export default connect(mapStateToProps, { fetchEndpoints, deleteService })(ServicesShow);