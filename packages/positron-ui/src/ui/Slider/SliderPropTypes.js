import { isDefined } from "positron-core/src/object";
import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { FormElement } from "../FormElement";

export function sliderValueType(props, propName, componentName, ...rest) {
    let error = PropTypes.number(props, propName, componentName, ...rest);

    if (!error) {
        const value = props[propName];

        if (isDefined(value) && !isFinite(value)) {
            error = new Error("Invalid prop `" + propName + "` supplied to `" + componentName
                + "`. `" + propName + "` should finite.");
        }

        return error;
    }
}

export function sliderMaxType(props, propName, componentName, ...rest) {
    let error = sliderValueType(props, propName, componentName, ...rest);

    if (!error) {
        const { max, min } = props;

        if (min > max) {
            error = new Error("Invalid prop `" + propName + "` supplied to `" + componentName
                + "`. `max` should be less than or equal to `max`.");
        }
    }

    return error;
}

export function sliderStepType(props, propName, componentName, ...rest) {
    let error = sliderValueType(props, propName, componentName, ...rest);

    if (!error) {
        const value = props[propName];

        if (value <= 0) {
            error = new Error("Invalid prop `" + propName + "` supplied to `" + componentName
                + "`. `step` should be greater than 0.");
        }
    }

    return error;
}

export const SliderPropTypes = Object.assign({}, FormElement, {
    max: sliderMaxType,
    min: sliderValueType,
    step: sliderStepType,
    value: sliderValueType
});

export const filterSliderProps = createPropsFilter(SliderPropTypes);

