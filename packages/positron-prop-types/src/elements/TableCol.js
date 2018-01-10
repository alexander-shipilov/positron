import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class TableCol extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            span: PropTypes.number
        }
    );
}
