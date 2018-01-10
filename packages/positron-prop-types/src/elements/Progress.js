import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class Progress extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            max: PropTypes.number,
            value: PropTypes.number
        }
    );
}
