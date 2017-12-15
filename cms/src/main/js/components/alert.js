import _ from 'lodash';
import React, { Component } from 'react';

class Alert extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        $(".alert").fadeTo(2000,500).slideUp(500, function() {
           $(this).slideUp(500);
        });
    }

    render() {
        if (this.props.alertVisible) {
            return (
                <div>
                    <div className={"alert " + this.props.type} role="alert">
                        {this.props.headline}
                    </div>
                </div>
            );
        }
        return <div></div>;
    }
}

export default Alert
