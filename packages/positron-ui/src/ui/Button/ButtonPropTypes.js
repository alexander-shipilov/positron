import { FormElementPropTypes } from "/ui/FormElement";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const ButtonPropTypes = Object.assign({}, FormElementPropTypes, {
    type: PropTypes.oneOf(["button", "reset", "submit"])
});

export const filterButtonProps = createPropsFilter(ButtonPropTypes);
