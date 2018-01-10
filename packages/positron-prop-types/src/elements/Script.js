import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class Script extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            async: PropTypes.bool,
            crossOrigin: PropTypes.string,
            defer: PropTypes.bool,
            integrity: PropTypes.string,
            src: PropTypes.string,
            type: PropTypes.string
        }
    );
}
