import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {deleteEntry} from '../actions/index.js';


const DeleteDialog = (props) => {

    var id = _.last(props.entry._links.self.href.split("/"));

    function handleDelete(e) {
        props.deleteEntry(props.entry._links.self.href, props.callback);
        $('#deleteModal-' + id).modal('hide');
    }

    var inputs = props.attributes.map(attribute => {
        return (
            <dl key={props.entry._links.self.href + "/" + attribute} className="row">
                <dt className="col-sm-3">{_.startCase(attribute)}</dt>
                <dd className="col-sm-9">{props.entry[attribute]}</dd>
            </dl>
        )
    });

    return (
        <div key={props.entry._links.self.href}>
            <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target={"#deleteModal-" + id}><i className="material-icons md-18">&#xE872;</i></button>
            <div className="modal fade" id={"deleteModal-" + id} tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Entry</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <legend>Are you sure to delete the entity?</legend>
                            {inputs}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {deleteEntry})(DeleteDialog);
