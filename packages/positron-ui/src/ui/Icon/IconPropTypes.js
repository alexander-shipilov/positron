import { createPropsFilter, isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "/ui/Element";
import { IconRenderer } from "./IconRenderer";

export const IconPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(IconRenderer)
});

export const filterIconProps = createPropsFilter(IconPropTypes);
