import { TogglePropTypes } from "/Toggle";
import { createPropsFilter } from "positron-core/src/prop-types";

export const CheckBoxPropTypes = Object.assign({}, TogglePropTypes);

export const filterCheckBoxProps = createPropsFilter(CheckBoxPropTypes);
