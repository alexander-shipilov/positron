import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const FormPropTypes = Object.assign({}, ElementPropTypes, {
    acceptCharset: PropTypes.string,
    action: PropTypes.string,
    autoComplete: PropTypes.bool,
    encType: PropTypes.string,
    method: PropTypes.string,
    noValidate: PropTypes.bool,
    target: PropTypes.string,

    onSubmit: PropTypes.func
});

export const filterFormProps = createPropsFilter(FormPropTypes);
