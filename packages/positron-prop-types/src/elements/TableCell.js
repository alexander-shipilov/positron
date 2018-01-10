import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class TableCell extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            colSpan: PropTypes.number,
            headers: PropTypes.string,
            rowSpan: PropTypes.number
        }
    );
}
