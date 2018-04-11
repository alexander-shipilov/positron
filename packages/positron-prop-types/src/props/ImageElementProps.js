import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { SizableElementProps } from "./SizableElementProps";

export class ImageElementProps extends PropsOwner {
    static propTypes = {
        ...SizableElementProps.propTypes,

        src: PropTypes.string,
        useMap: PropTypes.string
    };
}
