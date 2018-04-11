import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";
import { ImageElementProps } from "./ImageElementProps";

export class ImageProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,
        ...ImageElementProps.propTypes,

        alt: PropTypes.string,
        crossOrigin: PropTypes.string,
        sizes: PropTypes.string,
        srcSet: PropTypes.string,

        onLoad: PropTypes.func,
        onError: PropTypes.func
    };
}
