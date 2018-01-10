import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { Element } from "./Element";

export class Form extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            acceptCharset: PropTypes.string,
            action: PropTypes.string,
            autoComplete: PropTypes.bool,
            encType: PropTypes.string,
            method: PropTypes.string,
            noValidate: PropTypes.bool,
            target: PropTypes.string,

            onSubmit: PropTypes.func,
            onReset: PropTypes.func
        }
    );
}
