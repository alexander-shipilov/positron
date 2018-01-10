import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ImageElement } from "./_ImageElement";
import { Element } from "./Element";

export class Image extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        ImageElement.propTypes,
        {
            alt: PropTypes.string,
            crossOrigin: PropTypes.string,
            sizes: PropTypes.string,
            srcSet: PropTypes.string,

            onLoad: PropTypes.func,
            onError: PropTypes.func
        }
    );
}
