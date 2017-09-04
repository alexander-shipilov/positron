import { createPropsFilter } from "positron-core/src/prop-types";
import { FormElementPropTypes } from "./_FormElement";
import { ElementPropTypes } from "./Element";

export const FieldSetPropTypes = Object.assign({}, ElementPropTypes, FormElementPropTypes);

export const filterFieldSetProps = createPropsFilter(FieldSetPropTypes);
