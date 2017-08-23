import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { InputPropTypes } from "./Input";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { TextElementPropTypes } from "./_TextElement";

export const TextAreaPropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, TextElementPropTypes, {
    cols: PropTypes.number,
    rows: PropTypes.number,
    wrap: PropTypes.bool
});

export const filterTextAreaProps = createPropsFilter(TextAreaPropTypes);
