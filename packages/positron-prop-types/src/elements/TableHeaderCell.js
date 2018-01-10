import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";
import { TableCell } from "./TableCell";

export class TableHeaderCell extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        TableCell.propTypes,
        {
            scope: PropTypes.string
        }
    );
}
