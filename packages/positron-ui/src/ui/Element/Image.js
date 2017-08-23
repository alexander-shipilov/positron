import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ImageElementPropTypes } from "./_ImageElement";
import { ElementPropTypes } from "./Element";

export const ImagePropTypes = Object.assign({}, ElementPropTypes, ImageElementPropTypes, {
    alt: PropTypes.string,
    crossOrigin: PropTypes.string,
    sizes: PropTypes.string,
    srcSet: PropTypes.string,

    onLoad: PropTypes.func,
    onError: PropTypes.func
});

export const filterImageProps = createPropsFilter(ImagePropTypes);
