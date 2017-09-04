import { TogglePropTypes } from "/Toggle";
import { createPropsFilter } from "positron-core/src/prop-types";

export const RadioButtonPropTypes = Object.assign({}, TogglePropTypes);

export const filterRadioButtonProps = createPropsFilter(RadioButtonPropTypes);
