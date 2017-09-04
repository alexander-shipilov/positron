import { InputPropTypes } from "/Input";
import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { FormElementPropTypes } from "../FormElement";

export const TogglePropTypes = Object.assign({}, InputPropTypes, FormElementPropTypes, {
    type: PropTypes.oneOf(["checkbox", "radio"]),
    checked: PropTypes.bool
});

export const filterToggleProps = createPropsFilter(TogglePropTypes);
