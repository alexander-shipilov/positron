import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const FormPropTypes = {
    autoComplete: PropTypes.string,
    busy: PropTypes.bool,
    error: PropTypes.instanceOf(Error),
    method: PropTypes.string,
    onSubmit: PropTypes.func,
    errorAlign: PropTypes.string
};
