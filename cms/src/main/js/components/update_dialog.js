import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UpdateDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            attributes: props.attributes || [],
            entry: props.entry || {},
            id: _.last(props.entry._links.self.href.split("/"))
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            attributes: nextProps.attributes,
            entry: nextProps.entry,
            id: _.last(nextProps.entry._links.self.href.split("/"))
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var newEntry = {};
        this.state.attributes.forEach(attribute => {
           newEntry[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });

        this.props.handleCreateEntry(newEntry);

        this.state.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        });
        $('#updateModal-' + this.state.id).modal('hide');
    }

    render() {
        var inputs = this.state.attributes.map(attribute => {
            return (
                <p key={attribute}>
                    <label>{_.startCase(attribute)}</label>
                    <input type="text" ref={attribute} className="form-control" defaultValue={this.state.entry[attribute]}/>
                </p>
            )
        });
        return (
            <div key={this.state.id}>
                <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target={"#updateModal-" + this.state.id}><i className="material-icons md-18">&#xE254;</i></button>
                <div className="modal fade" id={"updateModal-" + this.state.id} tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Entry</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {inputs}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateDialog;