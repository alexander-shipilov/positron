import PropTypes from "prop-types";
import { RequiredElementPropTypes } from "./_RequiredElement";

export const ToggleElementPropTypes = Object.assign({}, RequiredElementPropTypes, {
    checked: PropTypes.bool,
    required: PropTypes.bool
});
