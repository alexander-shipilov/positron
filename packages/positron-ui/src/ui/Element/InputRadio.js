import { createPropsFilter } from "positron-core/src/prop-types";
import { ToggleElementPropTypes } from "./_ToggleElement";
import { InputPropTypes } from "./Input";

export const InputRadioPropTypes = Object.assign({}, InputPropTypes, ToggleElementPropTypes);

export const filterInputRadioProps = createPropsFilter(InputRadioPropTypes);
