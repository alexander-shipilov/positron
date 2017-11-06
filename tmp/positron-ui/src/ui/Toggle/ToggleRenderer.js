import { Input } from "/Input";
import React from "react";
import { filterToggleProps } from "./TogglePropTypes";

export const ToggleRenderer = {
    renderInput(toggle) {
        const props = filterToggleProps(toggle.props);

        return (
            <input { ...props }
                id={ toggle.id }
                className={ toggle.element("input") }
                onChange={ toggle.onInputChange }
                onFocus={ toggle.onInputFocus }
                onBlur={ toggle.onInputBlur } />
        );
    },

    renderLabel(toggle) {
        const { props: { children } } = toggle;

        return (
            <label htmlFor={ toggle.id } className={ toggle.element("label") }
                onMouseDown={ toggle.onLabelMouseDown }>
                { children }
            </label>
        );
    },

    render(toggle) {
        const props = filterToggleProps(toggle.props);
        const { checked } = toggle.props;
        const { focus } = toggle.state;

        return (
            <Input { ...props } focus={ focus } className={ toggle.block({ checked }) }>
                { this.renderInput(toggle) }
                { this.renderLabel(toggle) }
            </Input>
        );
    }
};
