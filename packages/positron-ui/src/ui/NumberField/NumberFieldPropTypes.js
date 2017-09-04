import { createPropsFilter, PropTypes } from "positron-core/src/prop-types";
import { filterTextElementProps } from "../TextElement";

export const NumberFieldPropTypes = Object.assign({}, filterTextElementProps, {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    interval: PropTypes.number
});

export const filterNumberFieldProps = createPropsFilter(NumberFieldPropTypes);

