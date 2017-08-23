import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";
import { Movable } from "/ui/Movable";
import { DIRECTION_HORIZONTAL } from "positron-core/constants/directions";
import { LEFT, RIGHT } from "positron-core/constants/key-codes";
import { Rect } from "positron-core/dom-rect";
import { clamp, round } from "positron-core/math";

import "./Slider.scss";
import { SliderPropTypes } from "./SliderPropTypes";
import { SliderRenderer } from "./SliderRenderer";

export class Slider extends Component.implement(FormElement, Movable) {
    init(...args) {
        super.init(...args);
        this.initFormElement();

        this.onHandleKeyDown = this.onHandleKeyDown.bind(this);
        this.onHandleMouseDown = this.onHandleMouseDown.bind(this);
    }

    getMoveDirection() {
        return DIRECTION_HORIZONTAL;
    }

    getMoveTarget(props, event) {
        return event.target;
    }

    getMoveConstraint(props) {
        return (point) => Rect.fromElement(props.area).constrain(point);
    }

    move(props, point) {
        const { max, min, step } = this.props;

        this.onChange(min + round(point.left / Rect.fromElement(props.area).width * (max - min), step));
    }

    onHandleKeyDown(event) {
        const { min, max, value, step } = this.props;
        const { keyCode } = event;

        if (keyCode === LEFT || keyCode === RIGHT) {
            this.onChange(clamp((value || 0) + (keyCode === RIGHT ? step : -step), min, max));
        }
    }

    onHandleMouseDown(event) {
        event.preventDefault();
        event.currentTarget.focus();

        this.startMove(event);
    }
}

Slider.initPropTypes(SliderPropTypes).initDefaultProps({
    renderer: SliderRenderer
});
