import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const TableCellPropTypes = Object.assign({}, ElementPropTypes, {
    colSpan: PropTypes.number,
    headers: PropTypes.string,
    rowSpan: PropTypes.number
});

export const filterTableCellProps = createPropsFilter(TableCellPropTypes);
