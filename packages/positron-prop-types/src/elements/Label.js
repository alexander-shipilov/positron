import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class Label extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            form: PropTypes.string,
            htmlFor: PropTypes.string
        }
    );
}
