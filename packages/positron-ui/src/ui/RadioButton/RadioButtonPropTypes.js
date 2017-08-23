import { TogglePropTypes } from "/Toggle";
import { createPropsFilter } from "positron-core/prop-types";

export const RadioButtonPropTypes = Object.assign({}, TogglePropTypes);

export const filterRadioButtonProps = createPropsFilter(RadioButtonPropTypes);
