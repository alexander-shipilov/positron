import { Input, filterInputProps } from "/Input";
import { filterTextElementProps } from "/ui/TextElement";
import { nvl } from "positron-core/object";
import React from "react";

export const TextFieldRenderer = {
    renderInput(textField) {
        const props = filterTextElementProps(textField.props);
        const { value } = props;

        return (
            <input { ...props }
                value={ nvl(value, "") }
                className={ textField.element("input") }
                onChange={ textField.onInputChange }
                onFocus={ textField.onInputFocus }
                onBlur={ textField.onInputBlur } />
        );
    },

    render(textField) {
        const { type, children } = textField.props;
        const { focus } = textField.state;
        const inputProps = filterInputProps(textField.props);

        return (
            <Input { ...inputProps } focus={ focus } className={ textField.block({ [type]: true }) }>
                { this.renderInput(textField) }
                { children }
            </Input>
        );
    }
};
