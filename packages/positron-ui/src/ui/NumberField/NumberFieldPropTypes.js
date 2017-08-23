import { PropTypes, createPropsFilter } from "positron-core/prop-types";
import { filterTextElementProps } from "/ui/TextElement";

export const NumberFieldPropTypes = Object.assign({}, filterTextElementProps, {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    interval: PropTypes.number
});

export const filterNumberFieldProps = createPropsFilter(NumberFieldPropTypes);

