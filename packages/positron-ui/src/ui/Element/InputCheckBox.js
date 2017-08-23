import { createPropsFilter } from "positron-core/prop-types";
import { ToggleElementPropTypes } from "./_ToggleElement";
import { InputPropTypes } from "./Input";

export const InputCheckBoxPropTypes = Object.assign({}, InputPropTypes, ToggleElementPropTypes);

export const filterInputCheckBoxProps = createPropsFilter(InputCheckBoxPropTypes);
