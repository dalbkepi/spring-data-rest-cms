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

    renderEndpoints() {
        return _.map(this.props.endpoints, endpoint => {
           return (
               <li class="nav-item">
                   <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{endpoint}</a>
               </li>
           )
        });
    }

    render() {
        const { endpoints } = this.props;

        if (!endpoints) {
            return <div>Loading...</div>;
        }

        return (
          <div>
              <Link to="/" className="btn btn-secondary">Back To Index</Link>
              <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
              >
                  Delete Service
              </button>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {this.renderEndpoints()}
              </ul>
              <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
              </div>

          </div>
        );
    }
}

function mapStateToProps(state) {
    return { endpoints: state.endpoints };
}

export default connect(mapStateToProps, { fetchEndpoints, deleteService })(ServicesShow);