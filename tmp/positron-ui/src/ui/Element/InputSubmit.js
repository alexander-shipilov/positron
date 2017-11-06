import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { InputButtonPropTypes } from "./InputButton";

export const InputSubmitPropTypes = Object.assign({}, InputButtonPropTypes, {
    formAction: PropTypes.string,
    formEncType: PropTypes.string,
    formMethod: PropTypes.string,
    formNoValidate: PropTypes.bool,
    formTarget: PropTypes.string
});

export const filterInputSubmitProps = createPropsFilter(InputSubmitPropTypes);
