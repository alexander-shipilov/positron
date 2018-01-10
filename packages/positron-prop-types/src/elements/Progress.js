import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class Progress extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            max: PropTypes.number,
            value: PropTypes.number
        }
    );
}
