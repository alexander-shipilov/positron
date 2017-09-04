import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import PropTypes from "prop-types";
import { MarkdownRenderer } from "./MarkdownRenderer";

export const MarkdownPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(MarkdownRenderer),
    children: PropTypes.string.isRequired
});

export const filterMarkdownProps = createPropsFilter(MarkdownPropTypes);
