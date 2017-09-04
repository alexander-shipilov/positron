import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { TextElementPropTypes } from "./_TextElement";
import { InputPropTypes } from "./Input";

export const InputTextPropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, TextElementPropTypes, {
    list: PropTypes.string
});

export const filterInputTextProps = createPropsFilter(InputTextPropTypes);
