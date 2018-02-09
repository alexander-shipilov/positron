import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import React from "react";
import { Component } from "ui/Component";

export class FormButtons extends Component {
    static get name() {
        return "FormButtons";
    };

    static propTypes = compact(
        Element.propTypes
    );

    render() {
        const { children } = this.props;

        return (
            <div { ...Element.filterProps(this.props) } className={ this.block(null, "form-group") }>
                { children }
            </div>
        );
    }
}
