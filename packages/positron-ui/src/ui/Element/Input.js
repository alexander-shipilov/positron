import PropTypes from "prop-types";
import { FormElementPropTypes } from "./_FormElement";
import { ElementPropTypes } from "./Element";

export const InputPropTypes = Object.assign({}, ElementPropTypes, FormElementPropTypes, {
    autoFocus: PropTypes.bool,
    autoComplete: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.any
});
