import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { TextElementPropTypes } from "./_TextElement";
import { InputPropTypes } from "./Input";

export const TextAreaPropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, TextElementPropTypes, {
    cols: PropTypes.number,
    rows: PropTypes.number,
    wrap: PropTypes.bool
});

export const filterTextAreaProps = createPropsFilter(TextAreaPropTypes);
