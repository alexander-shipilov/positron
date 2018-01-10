import { compact } from "positron-core";
import PropTypes from "prop-types";
import { RequiredElement } from "./_RequiredElement";

export const CheckedElement = {
    propTypes: compact(
        RequiredElement.propTypes,
        {
            checked: PropTypes.bool
        }
    )
};
