import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {updateEntry} from '../actions/index.js';


const UpdateDialog = (props) => {

    var updatedEntry = props.entry;
    var id = _.last(props.entry._links.self.href.split("/"));

    function handleUpdate(e) {
        props.updateEntry(props.entry._links.self.href, updatedEntry , props.callback);
        $('#updateModal-' + id).modal('hide');
    }

    function handleChange(attribute, e) {
        updatedEntry =  {...updatedEntry, [attribute]: e.target.value};
    }


    var inputs = props.attributes.map(attribute => {
        return (
            <p key={props.entry._links.self.href + "/" + attribute}>
                <label>{_.startCase(attribute)}</label>
                <input type="text" onChange={(e) => handleChange(attribute, e)} className="form-control" defaultValue={props.entry[attribute]}/>
            </p>
        )
    });
    return (
        <div key={props.entry._links.self.href}>
            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target={"#updateModal-" + id}><i className="material-icons md-18">&#xE254;</i></button>
            <div className="modal fade" id={"updateModal-" + id} tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
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
                            <button type="button" className="btn btn-success" onClick={handleUpdate}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {updateEntry})(UpdateDialog);
