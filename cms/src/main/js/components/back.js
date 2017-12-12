import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    return (
        <div className="mb-3">
            <Link to={props.path} className="btn btn-secondary">Back</Link>
        </div>
    );
}