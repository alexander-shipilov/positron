import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";

export const InputPropTypes = Object.assign({}, ElementPropTypes, {
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    readOnly: PropTypes.bool
});

export const filterInputProps = createPropsFilter(InputPropTypes);

