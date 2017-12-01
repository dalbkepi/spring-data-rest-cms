import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

    handleClick(key) {
        const { id } = this.props.match.params;
        this.props.history.push("/services/"+id+"/"+key);
    }

    renderEndpointsTab(firstKey) {
        var that = this;
        return _.map(this.props.endpoints, function(value, key) {
            var firstClass = (key == firstKey) ? 'show active' : ''
            return (
                <li className="nav-item" key={key+"-tab"}>

                    {/*<Link to={"/services/"+id+"/"+key} className={"nav-link " + firstClass}>{key}</Link>*/}
                    <a className={"nav-link " + firstClass} onClick={(e) => that.handleClick(key, e)} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{key}</a>
                </li>
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
                <h3>Endpoints</h3>
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

export default connect(mapStateToProps, { fetchEndpoints })(ServicesShow);