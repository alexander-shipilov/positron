import { InputPropTypes } from "/Input";
import { createPropsFilter, isArrayLike } from "positron-core/src/prop-types";

export const CheckBoxGroupPropTypes = Object.assign({}, InputPropTypes, {
    options: isArrayLike,
    value: isArrayLike
});

export const filterCheckBoxGroupProps = createPropsFilter(CheckBoxGroupPropTypes);
