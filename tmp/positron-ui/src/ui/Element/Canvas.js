import { createPropsFilter } from "positron-core/src/prop-types";
import { SizableElementPropsTypes } from "./_SizableElement";
import { ElementPropTypes } from "./Element";

export const CanvasPropTypes = Object.assign({}, ElementPropTypes, SizableElementPropsTypes);

export const filterCanvasProps = createPropsFilter(CanvasPropTypes);
