import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const DRAG_SIDE_FROM = 1;
export const DRAG_SIDE_TO = 2;
export const DRAG_SIDE_BOTH = 3;

function rangeValidator(props, propName) {
    const value = props[propName];
    const isValid = typeof value === "object"
        && value !== null
        && typeof value.from === "number" && isFinite(value.from)
        && typeof value.to === "number" && isFinite(value.to);

    let error = null;

    if (!isValid) {
        error = new Error(`${propName} should be a Range object like {from, to}`);
    } else if (value.from > value.to) {
        error = new Error("`to` should not be less than `from`");
    }

    return error;
}

export const RangePickerPropTypes = {
    range: rangeValidator,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    label: PropTypes.any,
    className: PropTypes.string,
    formatter: PropTypes.func,
    onChange: PropTypes.func
};
