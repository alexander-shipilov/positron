import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

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
