import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";
import { TextElement } from "/ui/TextElement";
import { DOWN, UP } from "positron-core/constants/key-codes";

import "./NumberField.scss";
import { NumberFieldPropTypes } from "./NumberFieldPropTypes";
import { NumberFieldRenderer } from "./NumberFieldRenderer";

export class NumberField extends Component.implement(FormElement, TextElement) {
    init(...args) {
        super.init(...args);
        this.initFormElement();
        this.initTextElement();
        this.initState({ buttonInterval: null });

        this.onButtonTickStop = this.onButtonTickStop.bind(this);
        this.onDecreaseTick = this.onDecreaseTick.bind(this);
        this.onIncreaseTick = this.onIncreaseTick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    setButtonInterval(buttonInterval) {
        this.setState({ buttonInterval });
    }

    onButtonTick(increment, count = 0) {
        const { value, min, max } = this.props;
        const { buttonInterval } = this.state;

        this.onChange(Math.min(max, Math.max(min, +value + increment)));
        this.setButtonInterval(Math.max(20, buttonInterval - Math.floor(0.3 * count)));
    }

    onButtonTickStop() {
        this.setButtonInterval(this.props.interval);
    }

    componentWillMount() {
        this.buttonInterval = this.props.interval;

        this.setButtonInterval(this.props.interval);
    }

    onDecreaseTick(count) {
        this.onButtonTick(-1, count);
    }

    onIncreaseTick(count) {
        this.onButtonTick(1, count);
    }

    onKeyDown(event) {
        const { keyCode } = event;

        if (keyCode === DOWN || keyCode === UP) {
            event.preventDefault();
            this.onButtonTick(keyCode === DOWN ? -1 : 1);
        }
    }
}

NumberField.initPropTypes(NumberFieldPropTypes).initDefaultProps({
    renderer: NumberFieldRenderer,
    interval: 100,
    max: Number.POSITIVE_INFINITY,
    min: Number.NEGATIVE_INFINITY
});
