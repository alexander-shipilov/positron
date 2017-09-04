import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export class FormElement {
    initFormElement() {
        this.initState({ focus: false });

        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }

    onChange(value) {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value, name);
        }
    }

    onInputBlur(...args) {
        const { onBlur } = this.props;

        this.setFocused(false);
        if (onBlur) {
            onBlur(...args);
        }
    }

    onInputFocus(...args) {
        const { onFocus } = this.props;

        this.setFocused(true);
        if (onFocus) {
            onFocus(...args);
        }
    }

    setFocused(focus) {
        this.setState({ focus: !!focus });
    }
}

export const FormElementPropTypes = Object.assign({}, ElementPropTypes, {
    name: PropTypes.string,
    tabIndex: PropTypes.number,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any
});

export const filterFormElementProps = createPropsFilter(FormElementPropTypes);

