import { InputPropTypes } from "/Input";
import { isArrayLike, createPropsFilter } from "positron-core/prop-types";

export const CheckBoxGroupPropTypes = Object.assign({}, InputPropTypes, {
    options: isArrayLike,
    value: isArrayLike
});

export const filterCheckBoxGroupProps = createPropsFilter(CheckBoxGroupPropTypes);
