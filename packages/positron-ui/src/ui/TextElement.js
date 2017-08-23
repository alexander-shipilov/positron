import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { FormElementPropTypes } from "./FormElement";

export class TextElement {
    initTextElement() {
        this.cursorPosition = 0;
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidUpdate() {
        const { input } = this.refs;

        if (input) {
            input.setSelectionRange(this.cursorPosition, this.cursorPosition);
        }
    }

    onInputChange(event) {
        const { target } = event;

        this.cursorPosition = target.selectionEnd || 0;
        this.onChange(target.value);
    }
}

export const TextElementPropTypes = Object.assign({}, FormElementPropTypes, {
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    maxLength: PropTypes.number
});

export const filterTextElementProps = createPropsFilter(TextElementPropTypes);
