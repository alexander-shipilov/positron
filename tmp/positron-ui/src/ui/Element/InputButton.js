import { createPropsFilter } from "positron-core/src/prop-types";
import { InputPropTypes } from "./Input";

export const InputButtonPropTypes = Object.assign({}, InputPropTypes, {});

export const filterInputButtonProps = createPropsFilter(InputButtonPropTypes);