import PropTypes from "prop-types";
import { SizableElementPropsTypes } from "./_SizableElement";

export const ImageElementPropTypes = Object.assign({}, SizableElementPropsTypes, {
    src: PropTypes.string,
    useMap: PropTypes.string
});
