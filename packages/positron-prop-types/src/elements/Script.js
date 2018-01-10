import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

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
