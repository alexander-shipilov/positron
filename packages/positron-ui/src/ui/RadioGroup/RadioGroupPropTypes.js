import { InputPropTypes } from "/Input";
import { createPropsFilter, isArrayLike } from "positron-core/src/prop-types";
import PropTypes from "prop-types";

export const RadioGroupPropTypes = Object.assign({}, InputPropTypes, {
    options: isArrayLike,
    value: PropTypes.any
});

export const filterRadioGroupProps = createPropsFilter(RadioGroupPropTypes);
