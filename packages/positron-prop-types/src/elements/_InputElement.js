import { compact } from "positron-core";
import PropTypes from "prop-types";
import { FormElement } from "./_FormElement";
import { Element } from "./Element";

export const InputElement = {
    propTypes: compact(
        Element.propTypes,
        FormElement.propTypes,
        {
            autoFocus: PropTypes.bool,
            autoComplete: PropTypes.bool,
            type: PropTypes.string,
            value: PropTypes.any,

            onChange: PropTypes.func,
            onInput: PropTypes.func,
            onInvalid: PropTypes.func,
            onSubmit: PropTypes.func
        }
    )
};
