import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { FormElementPropTypes } from "../FormElement";

export const ButtonPropTypes = Object.assign({}, FormElementPropTypes, {
    type: PropTypes.oneOf(["button", "reset", "submit"])
});

export const filterButtonProps = createPropsFilter(ButtonPropTypes);
