import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEndpoints, deleteService } from '../actions';

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

    renderEndpointsTab() {
        return _.map(this.props.endpoints, function(value, key) {
            return (
                <li className="nav-item" key={key+"-tab"}>
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{key}</a>
                </li>
            )
        });
    }
    renderEndpointsContent () {
        return _.map(this.props.endpoints, function(value, key) {
            return (
                <div key={key+"-content"} className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{value.href}</div>
            )
        });
    }

    render() {
        const { endpoints } = this.props;

        if (_.isEmpty(endpoints)) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/" className="btn btn-secondary">Back To Index</Link>
                {/*<button*/}
                    {/*className="btn btn-danger pull-xs-right"*/}
                    {/*onClick={this.onDeleteClick.bind(this)}*/}
                {/*>*/}
                    {/*Delete Service*/}
                {/*</button>*/}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {this.renderEndpointsTab()}
                </ul>
                <div className="tab-content" id="myTabContent">
                    {this.renderEndpointsContent()}
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoints: state.endpoints };
}

export default connect(mapStateToProps, { fetchEndpoints, deleteService })(ServicesShow);