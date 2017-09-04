import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "../Element";
import { IconRenderer } from "./IconRenderer";

export const IconPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(IconRenderer)
});

export const filterIconProps = createPropsFilter(IconPropTypes);
