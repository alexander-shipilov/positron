import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";
import { DropOwnerRenderer } from "./DropOwnerRenderer";

export const DropOwnerPropTypes = Object.assign({}, ElementPropTypes, {
    align: PropTypes.string.isRequired,
    hideOnScroll: PropTypes.bool,
    hideOnResize: PropTypes.bool,
    hideOnMouseDown: PropTypes.bool,
    children: PropTypes.element.isRequired,
    renderer: isClass(DropOwnerRenderer)
});

export const filterDropOwnerProps = createPropsFilter(DropOwnerPropTypes);
