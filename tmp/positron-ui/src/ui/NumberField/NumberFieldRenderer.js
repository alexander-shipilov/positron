import { RepeatButton } from "/RepeatButton";
import { filterTextFieldProps, TextField } from "/TextField";
import { isDefined } from "positron-core/src/object";
import React from "react";

export const NumberFieldRenderer = {
    renderDecreaseButton(numberField, interval) {
        const { props, props: { value } } = numberField;
        const disabled = props.disabled || isNaN(value) || value <= props.min;

        return (
            <RepeatButton { ...{ disabled, interval, tabIndex: -1 } }
                className={ numberField.element("decrease-button") }
                onTick={ numberField.onDecreaseTick } onTickStop={ numberField.onButtonTickStop } />
        );
    },

    renderIncreaseButton(numberField, interval) {
        const { props, props: { value } } = numberField;
        const disabled = props.disabled || isNaN(value) || value >= props.max;

        return (
            <RepeatButton { ...{ disabled, interval, tabIndex: -1 } }
                className={ numberField.element("increase-button") }
                onTick={ numberField.onIncreaseTick } onTickStop={ numberField.onButtonTickStop } />
        );
    },

    render(numberField) {
        const { max, min, value } = numberField.props;
        const { buttonInterval } = numberField.state;

        const error = isDefined(value) && value !== "" && (isNaN(value) || value < min || value > max);

        return (
            <TextField { ...filterTextFieldProps(numberField.props) } maxLength={ 10 } { ...{ value, error } }
                className={ numberField.block({ error }) } onKeyDown={ numberField.onKeyDown }>
                { this.renderDecreaseButton(numberField, buttonInterval) }
                { this.renderIncreaseButton(numberField, buttonInterval) }
            </TextField>
        );
    }
};
