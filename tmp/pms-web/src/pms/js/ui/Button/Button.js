import { compact } from "positron-core";
import { InputButton } from "positron-prop-types";
import React from "react";
import { Component } from "ui/Component";

export class Button extends Component {
    static get name() {
        return "Button";
    }

    static propTypes = compact(
        InputButton.propTypes
    );

    static defaultProps = {
        type: "button"
    };

    render() {
        const { type, children, disabled } = this.props;

        return (
            <button { ...InputButton.filterProps(this.props) } className={ this.block({ type, disabled }) }>
                { children }
            </button>
        );
    }
}
