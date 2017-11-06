import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import PropTypes from "prop-types";
import { DocViewRenderer } from "./DocViewRenderer";

export const DocViewPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(DocViewRenderer),
    header: PropTypes.node,
    footer: PropTypes.node
});

export const filterDocViewProps = createPropsFilter(DocViewPropTypes);
