import { ExternalPropTypes } from "/ui/External";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const DropPropTypes = Object.assign({}, ExternalPropTypes, {
    to: PropTypes.instanceOf(HTMLElement).isRequired,
    align: PropTypes.string.isRequired,
    hideOnScroll: PropTypes.bool,
    hideOnResize: PropTypes.bool,
    hideOnMouseDown: PropTypes.bool
});

export const filterDropProps = createPropsFilter(DropPropTypes);
