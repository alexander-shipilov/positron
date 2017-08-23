import { filterFormElementProps } from "/ui/FormElement";
import { Input, filterInputProps } from "/Input";
import React from "react";

export const ListRenderer = {
    getOptionValue(option, index) {
        return option.value || index;
    },

    getOptionLabel(option) {
        return option.label || String(option);
    },

    renderSelectOption(list, option, index) {
        const value = this.getOptionValue(option, index);

        return (
            <option key={ value } { ...{ value } }>{ this.getOptionLabel(option, index) }</option>
        );
    },

    renderSelectOptions(list, options) {
        return options.map((option, index) => this.renderSelectOption(list, option, index));
    },

    renderSelect(list) {
        const { options, multiple } = list.props;
        const props = filterFormElementProps(list.props);

        return (
            <select { ...props }
                id={ list.id }
                ref="input"
                size="2"
                multiple={ multiple }
                className={ list.element("input") }
                onChange={ list.onSelectChange }
                onFocus={ list.onInputFocus }
                onBlur={ list.onInputBlur }>

                { options ? this.renderSelectOptions(list, options) : null }
            </select>
        );
    },

    renderOption(list, option, index) {
        const value = this.getOptionValue(option, index);
        const selected = list.isSelected(value);

        return (
            <label key={ value } htmlFor={ list.id } data-value={ value }
                className={ list.element("option", { selected }) }
                onMouseDown={ list.onItemMouseDown }>
                { this.getOptionLabel(option, index) }
            </label>
        );
    },

    renderOptions(list, options) {
        return options.map((option, index) => this.renderOption(list, option, index));
    },

    render(list) {
        const { children, options, multiple } = list.props;
        const { focus } = list.state;
        const inputProps = filterInputProps(list.props);

        return (
            <Input focus={ focus } { ...inputProps } className={ list.block({ multiple }) }>
                { this.renderSelect(list) }
                { options ? this.renderOptions(list, options) : null }
                { children }
            </Input>
        );
    }
};
