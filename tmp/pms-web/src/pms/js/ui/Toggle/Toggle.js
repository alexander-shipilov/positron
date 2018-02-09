import { compact } from "positron-core";
import { classNames as cx } from "positron-dom";
import { InputCheckBox, InputRadio } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class Toggle extends Component {
    static get name() {
        return "Toggle";
    }

    static propTypes = compact(
        InputCheckBox.propTypes,
        InputRadio.propTypes,
        {
            type: PropTypes.oneOf(["checkbox", "radio"]),
            value: PropTypes.bool,
            inline: PropTypes.bool,
            right: PropTypes.bool
        }
    );

    static defaultProps = {};

    onChange = (event) => {
        const { onChange, name } = this.props;
        const { target: { checked } } = event;

        if (onChange) {
            onChange(checked, name, event);
        }
    };

    renderInput() {
        const { type } = this.props;
        const props = (type === "checkbox" ? InputCheckBox : InputRadio)
            .filterProps(this.props, { children: false, value: false });

        return (
            <input { ...props } className={ this.element("input") } onChange={ this.onChange } />
        );
    }

    renderInline() {
        const { children, disabled, right, type } = this.props;

        return (
            <label className={ this.block(null, cx(type + "-inline", { [type + "-right"]: right, disabled })) }>
                { this.renderInput() }
                { children }
            </label>
        );
    }

    renderBlock() {
        const { children, disabled, right, type } = this.props;

        return (
            <div className={ this.block(null, cx(type, { [type + "-right"]: right, disabled })) }>
                <label>
                    { this.renderInput() }
                    { children }
                </label>
            </div>
        );
    }

    render() {
        const { inline } = this.props;

        return inline ? this.renderInline() : this.renderBlock();
    }
}
