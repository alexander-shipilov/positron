import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";
import { TableCellPropTypes } from "./TableCell";

export const TableHeaderCellPropTypes = Object.assign({}, ElementPropTypes, TableCellPropTypes, {
    scope: PropTypes.string
});

export const filterTableHeaderCellProps = createPropsFilter(TableHeaderCellPropTypes);
