import { FormElementPropTypes } from "/ui/FormElement";
import { InputPropTypes } from "/Input";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const TogglePropTypes = Object.assign({}, InputPropTypes, FormElementPropTypes, {
    type: PropTypes.oneOf(["checkbox", "radio"]),
    checked: PropTypes.bool
});

export const filterToggleProps = createPropsFilter(TogglePropTypes);
