import { createPropsFilter, isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "/ui/Element";
import { MarkdownRenderer } from "./MarkdownRenderer";

export const MarkdownPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(MarkdownRenderer),
    children: PropTypes.string.isRequired
});

export const filterMarkdownProps = createPropsFilter(MarkdownPropTypes);
