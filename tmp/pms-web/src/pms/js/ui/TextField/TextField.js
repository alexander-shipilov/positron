import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { InputText } from "ui/InputText";

export class TextField extends Component {
    static get name() {
        return "TextField";
    }

    static propTypes = compact(
        InputText.propTypes,
        {
        }
    );

    static defaultProps = {
        feedbackLeft: false
    };

    state = { focused: false };

    onChange = (value) => {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value, name);
        }
    };

    onFocus = () => {
        this.setState({ focused: true });
    };

    onBlur = () => {
        this.setState({ focused: false });
    };

    renderInput() {
        return (
            <InputText { ...InputText.filterProps(this.props, { children: false }) } className={ this.element("input") }
                onChange={ this.onChange } onFocus={ this.onFocus } onBlur={ this.onBlur } />
        );
    }

    render() {
        const { children, disabled, readOnly } = this.props;
        const { focused } = this.state;

        return (
            <div className={ this.block({ disabled, focused, readOnly }) }>
                { this.renderInput() }
                { children }
            </div>
        );
    }
}
