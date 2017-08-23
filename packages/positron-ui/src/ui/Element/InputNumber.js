import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { InputTextPropTypes } from "./InputText";

export const InputNumberPropTypes = Object.assign({}, InputTextPropTypes, {
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number
});

export const filterInputNumberProps = createPropsFilter(InputNumberPropTypes);
