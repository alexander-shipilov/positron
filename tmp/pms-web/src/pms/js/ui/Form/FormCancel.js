import { compact } from "positron-core";
import React from "react";
import { Button } from "ui/Button";
import { Component } from "ui/Component";

export class FormCancel extends Component {
    static get name() {
        return "FormCancel";
    }

    static propTypes = compact(
        Button.propTypes
    );

    onClick = () => {
        const { onClick } = this.props;

        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    };

    render() {
        const { children } = this.props;

        return (
            <Button { ...Button.filterProps(this.props) } type="cancel" className={ this.block() }
                onClick={ this.onClick }>
                { children }
            </Button>
        );
    }
}
