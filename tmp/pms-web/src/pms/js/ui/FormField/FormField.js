import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class FormField extends Component {
    static get name() {
        return "FormField";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            help: PropTypes.node,
            label: PropTypes.node,
            labelFor: PropTypes.string
        }
    );

    renderLabel() {
        const { label, labelFor } = this.props;

        return label
            ? (
                <label htmlFor={ labelFor } className={ this.element("label") }>
                    { label }
                </label>
            )
            : null;
    }

    renderHelp() {
        const { help } = this.props;

        return help
            ? (
                <span className={ this.element("help") }>{ help }</span>
            )
            : null;
    }

    render() {
        const { children, error } = this.props;

        return (
            <div { ...Element.filterProps(this.props) } className={ this.block({ error: Boolean(error) }) }>
                { this.renderLabel() }
                { children }
                { this.renderHelp() }
            </div>
        );
    }
}
