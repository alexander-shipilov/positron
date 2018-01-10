import { compact } from "positron-core";
import PropTypes from "prop-types";
import { SizableElement } from "./_SizableElement";

export const ImageElement = {
    propTypes: compact(
        SizableElement.propTypes,
        {
            src: PropTypes.string,
            useMap: PropTypes.string
        }
    )
};
