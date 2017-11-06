import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const ModPropTypes = Object.assign({}, ElementPropTypes, {
    cite: PropTypes.string,
    dateTime: PropTypes.string
});

export const filterModProps = createPropsFilter(ModPropTypes);
