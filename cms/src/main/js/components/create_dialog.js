import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CreateDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            attributes: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            attributes: nextProps.attributes
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
        $('#exampleModal').modal('hide');
    }

    render() {
        var inputs = this.state.attributes.map(attribute => {
            return (
                <p key={attribute}>
                    <input type="text" placeholder={_.startCase(attribute)} ref={attribute} className="form-control"/>
                </p>
            )
        });
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Create</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Entry</h5>
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

export default CreateDialog;