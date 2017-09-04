import { filterInputProps, Input } from "/Input";
import { RadioButton } from "/RadioButton";
import React from "react";

export const RadioGroupRenderer = {
    getOptionValue(option, index) {
        return option.value || index;
    },

    getOptionLabel(option) {
        return option.label || String(option);
    },

    renderOption(radioGroup, option, index) {
        const value = this.getOptionValue(option, index);
        const checked = radioGroup.isSelected(value);

        return (
            <RadioButton key={ value } { ...{ checked, name: value } } className={ radioGroup.element("option") }
                onChange={ radioGroup.onRadioChange }>
                { this.getOptionLabel(option) }
            </RadioButton>
        );
    },

    renderOptions(radioGroup, options) {
        return options.map((option, index) => this.renderOption(radioGroup, option, index));
    },

    render(radioGroup) {
        const { options } = radioGroup.props;
        const inputProps = filterInputProps(radioGroup.props);

        return (
            <Input { ...inputProps } className={ radioGroup.block() }>
                { options ? this.renderOptions(radioGroup, options) : null }
            </Input>
        );
    }
};
