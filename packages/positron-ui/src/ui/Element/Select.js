import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { InputPropTypes } from "./Input";

export const SelectPropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, {
    multiple: PropTypes.bool,
    size: PropTypes.number
});

export const filterSelectProps = createPropsFilter(SelectPropTypes);
