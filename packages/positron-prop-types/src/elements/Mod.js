import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class Mod extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            cite: PropTypes.string,
            dateTime: PropTypes.string
        }
    );
}
