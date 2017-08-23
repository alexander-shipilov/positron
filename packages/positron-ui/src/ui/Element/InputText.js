import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { InputPropTypes } from "./Input";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { TextElementPropTypes } from "./_TextElement";

export const InputTextPropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, TextElementPropTypes, {
    list: PropTypes.string
});

export const filterInputTextProps = createPropsFilter(InputTextPropTypes);
