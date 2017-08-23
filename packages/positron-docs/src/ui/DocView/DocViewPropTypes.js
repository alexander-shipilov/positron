import { createPropsFilter, isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "/ui/Element";
import { DocViewRenderer } from "./DocViewRenderer";

export const DocViewPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(DocViewRenderer),
    header: PropTypes.node,
    footer: PropTypes.node
});

export const filterDocViewProps = createPropsFilter(DocViewPropTypes);
