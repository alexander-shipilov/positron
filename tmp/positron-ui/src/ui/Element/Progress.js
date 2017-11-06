import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const ProgressPropTypes = Object.assign({}, ElementPropTypes, {
    max: PropTypes.number,
    value: PropTypes.number
});

export const filterProgressProps = createPropsFilter(ProgressPropTypes);
