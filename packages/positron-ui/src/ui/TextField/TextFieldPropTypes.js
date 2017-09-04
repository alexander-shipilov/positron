import { InputPropTypes } from "/Input";
import { createPropsFilter } from "positron-core/src/prop-types";
import { TextElementPropTypes } from "../TextElement";

export const TextFieldPropTypes = Object.assign({}, InputPropTypes, TextElementPropTypes, {});

export const filterTextFieldProps = createPropsFilter(TextFieldPropTypes);
