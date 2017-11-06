import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element/Element";
import PropTypes from "prop-types";
import { AccentSelectorRenderer } from "./AccentSelectorRenderer";

export const AccentSelectorPropTypes = Object.assign({}, ElementPropTypes, {
    accent: PropTypes.string,
    accents: PropTypes.objectOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func,
    renderer: isClass(AccentSelectorRenderer)
});

export const AccentSelectorProps = createPropsFilter(AccentSelectorPropTypes);

