import { InputPropTypes } from "/Input";
import { isArrayLike, createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const RadioGroupPropTypes = Object.assign({}, InputPropTypes, {
    options: isArrayLike,
    value: PropTypes.any
});

export const filterRadioGroupProps = createPropsFilter(RadioGroupPropTypes);
