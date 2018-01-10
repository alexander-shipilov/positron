import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class Label extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            form: PropTypes.string,
            htmlFor: PropTypes.string
        }
    );
}
