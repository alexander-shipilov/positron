import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const LabelPropTypes = Object.assign({}, ElementPropTypes, {
    form: PropTypes.string,
    htmlFor: PropTypes.string
});

export const filterLabelProps = createPropsFilter(LabelPropTypes);
