import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const TableColPropTypes = Object.assign({}, ElementPropTypes, {
    span: PropTypes.number
});

export const filterTableColProps = createPropsFilter(TableColPropTypes);
