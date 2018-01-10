import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";
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
