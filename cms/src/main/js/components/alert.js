import _ from 'lodash';
import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.alertVisible) {
            var values = _.map(this.props.response.entity, function(value, key) {
                return (
                    <tr key={key}>
                        <td>{_.startCase(key)}</td>
                        <td>{value}</td>
                    </tr>
                )
            });
            return (
                <div>
                    <div className="alert alert-success" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="alert-heading">{this.props.headline}</h4>
                        <hr />
                        <table className="table table-responsive">
                            <tbody>{values}</tbody>
                        </table>
                        <hr />
                        <p className="mb-0">Foo Bar.</p>
                    </div>
                </div>
            );
        }
        return <div></div>;
    }
}

export default Alert
