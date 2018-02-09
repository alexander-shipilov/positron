import { compact } from "positron-core";
import { Form as FormProps } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class Form extends Component {
    static propTypes = compact(
        FormProps.propTypes,
        {
            busy: PropTypes.bool,
            disabled: PropTypes.bool,
            error: PropTypes.bool,
            onCancel: PropTypes.func
        }
    );

    static defaultProps = {
        autoComplete: false
    };

    onCancel = () => {
        const { onCancel } = this.props;

        if (onCancel) {
            onCancel();
        }
    };

    onKeyDown = ({ keyCode }) => {
        if (keyCode === 27) {
            this.onCancel();
        }
    };

    onSubmit = (event) => {
        const { onSubmit } = this.props;

        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    };

    render() {
        const { busy, error, autoComplete } = this.props;

        return (
            <form autoComplete={ autoComplete ? "on" : "off" } className={ this.block({ busy, error }) }
                onSubmit={ this.onSubmit } onKeyDown={ this.onKeyDown }>
                { this.props.children }
            </form>
        );
    }
}
