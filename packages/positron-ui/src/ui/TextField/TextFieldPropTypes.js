import { InputPropTypes } from "/Input";
import { TextElementPropTypes } from "/ui/TextElement";
import { createPropsFilter } from "positron-core/prop-types";

export const TextFieldPropTypes = Object.assign({}, InputPropTypes, TextElementPropTypes, {});

export const filterTextFieldProps = createPropsFilter(TextFieldPropTypes);
