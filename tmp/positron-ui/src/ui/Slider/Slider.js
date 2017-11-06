import { Component } from "/Component";
import { DIRECTION_HORIZONTAL } from "positron-core/src/constants/directions";
import { LEFT, RIGHT } from "positron-core/src/constants/key-codes";
import { Rect } from "positron-core/src/dom-rect";
import { clamp, round } from "positron-core/src/math";
import { FormElement } from "../FormElement";
import { Movable } from "../Movable";

import "./Slider.scss";
import { SliderPropTypes } from "./SliderPropTypes";
import { SliderRenderer } from "./SliderRenderer";

export class Slider extends Component.implement(FormElement, Movable) {
    onHandleKeyDown = (event) => {
        const { min, max, value, step } = this.props;
        const { keyCode } = event;

        if (keyCode === LEFT || keyCode === RIGHT) {
            this.onChange(clamp((value || 0) + (keyCode === RIGHT ? step : -step), min, max));
        }
    };

    onHandleMouseDown = (event) => {
        event.preventDefault();
        event.currentTarget.focus();

        this.startMove(event);
    };

    constructor(...args) {
        super(...args);

        this.initFormElement();
    }

    getMoveConstraint(props) {
        return (point) => Rect.fromElement(props.area).constrain(point);
    }

    getMoveDirection() {
        return DIRECTION_HORIZONTAL;
    }

    getMoveTarget(props, event) {
        return event.target;
    }

    move(props, point) {
        const { max, min, step } = this.props;

        this.onChange(min + round(point.left / Rect.fromElement(props.area).width * (max - min), step));
    }
}

Slider.initPropTypes(SliderPropTypes).initDefaultProps({
    renderer: SliderRenderer
});
