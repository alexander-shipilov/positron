import { TogglePropTypes } from "/Toggle";
import { createPropsFilter } from "positron-core/prop-types";

export const CheckBoxPropTypes = Object.assign({}, TogglePropTypes);

export const filterCheckBoxProps = createPropsFilter(CheckBoxPropTypes);
