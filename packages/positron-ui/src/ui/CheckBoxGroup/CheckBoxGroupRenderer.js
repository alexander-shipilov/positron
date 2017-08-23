import { CheckBox } from "/CheckBox";
import { Input, filterInputProps } from "/Input";
import React from "react";

export const CheckBoxGroupRenderer = {
    getOptionValue(option, index) {
        return option.value || index;
    },

    getOptionLabel(option) {
        return option.label || String(option);
    },

    renderOption(checkBoxGroup, option, index) {
        const value = this.getOptionValue(option, index);
        const checked = checkBoxGroup.isSelected(value);

        return (
            <CheckBox key={ value } { ...{ checked, name: value } } className={ checkBoxGroup.block("option") }
                onChange={ checkBoxGroup.onCheckBoxChange }>
                { this.getOptionLabel(option) }
            </CheckBox>
        );
    },

    renderOptions(checkBoxGroup, options) {
        return options.map((option, index) => this.renderOption(checkBoxGroup, option, index));
    },

    render(checkBoxGroup) {
        const { options } = checkBoxGroup.props;
        const inputProps = filterInputProps(checkBoxGroup.props);

        return (
            <Input { ...inputProps } className={ checkBoxGroup.block() }>
                { options ? this.renderOptions(checkBoxGroup, options) : null }
            </Input>
        );
    }
};
