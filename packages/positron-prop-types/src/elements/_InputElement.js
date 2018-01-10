import { compact } from "positron-core";
import PropTypes from "prop-types";
import { FormElement } from "./_FormElement";

export const InputElement = {
    propTypes: compact(
        Element.propTypes,
        FormElement.propTypes,
        {
            autoFocus: PropTypes.bool,
            autoComplete: PropTypes.bool,
            type: PropTypes.string,
            value: PropTypes.any
        }
    )
};
