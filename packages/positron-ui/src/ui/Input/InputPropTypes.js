import { ElementPropTypes } from "/ui/Element";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const InputPropTypes = Object.assign({}, ElementPropTypes, {
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    readOnly: PropTypes.bool
});

export const filterInputProps = createPropsFilter(InputPropTypes);

