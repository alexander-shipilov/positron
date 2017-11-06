import { Component } from "/Component";
import { FormElement } from "../FormElement";

import "./List.scss";
import { ListPropTypes } from "./ListPropTypes";
import { ListRenderer } from "./ListRenderer";

export class List extends Component.implement(FormElement) {
    onItemMouseDown = (event) => {
        const { currentTarget, shiftKey, ctrlKey } = event;
        const value = currentTarget.getAttribute("data-value");

        // event.preventDefault();
        if (shiftKey) {
            this.selectOptionsRange(value);
        } else if (ctrlKey) {
            this.toggleOption(value);
            this.lastSelected = value;
        } else {
            this.selectOption(value);
            this.lastSelected = value;
        }
    };

    onSelectChange = () => {
        const { input } = this.refs;
        const { multiple } = this.props;

        const values = [];

        Array.from(input.options).forEach((option) => {
            if (option.selected) {
                values.push(option.getAttribute("value"));
            }
        });

        this.onChange(multiple ? values : values[0]);
    };

    constructor(...args) {
        super(...args);

        this.lastSelected = null;
        this.initFormElement();
    }

    getOptionValue(option, index) {
        return this.props.renderer.getOptionValue(option, index);
    }

    isSelected(optionValue) {
        const { value, multiple } = this.props;

        return multiple ? value.indexOf(optionValue) !== -1 : value === optionValue;
    }


    selectOption(optionValue) {
        const { multiple } = this.props;

        this.onChange(multiple ? [].concat(optionValue) : optionValue);
    }

    selectOptionsRange(toValue) {
        const { multiple, renderer, options } = this.props;
        let nextValue = toValue;

        if (multiple && this.lastSelected) {
            const fromIndex = options.indexByValue(this.lastSelected);
            const toIndex = options.indexByValue(toValue);

            nextValue = options.slice(Math.min(fromIndex, toIndex), Math.max(fromIndex, toIndex) + 1).valueOf();
            nextValue = nextValue.map((option, index) => renderer.getOptionValue(option, index));
        }

        this.onChange(nextValue);
    }

    toggleOption(optionValue) {
        const { multiple, value } = this.props;
        let nextValue = optionValue;

        if (multiple) {
            nextValue = value.indexOf(optionValue) === -1 ? value.concat(optionValue)
                : value.filter((value) => value !== optionValue);
        }

        this.onChange(nextValue);
    }
}

List.initPropTypes(ListPropTypes).initDefaultProps({
    renderer: ListRenderer,
    multiple: false
});
