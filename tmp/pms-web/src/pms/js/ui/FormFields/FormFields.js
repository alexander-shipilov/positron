import React from "react";
import { Component } from "ui/Component";

export class FormFields extends Component {
    render() {
        return (
            <fieldset className={ this.block() }>
                { this.props.children }
            </fieldset>
        );
    }
}
