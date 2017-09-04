import { filterInputProps, Input } from "/Input";
import { clamp, round } from "positron-core/src/math";
import { isDefined, nvl } from "positron-core/src/object";
import React from "react";

export const SliderRenderer = {
    renderHandle(slider) {
        const { max, min, step, value, disabled } = slider.props;
        const handlePosition = (clamp(round(nvl(value, min), step), min, max) - min) / (max - min) * 100 + "%";

        return (
            <button ref="handle" disabled={ disabled }
                className={ slider.element("handle") } style={ { left: handlePosition } }
                onFocus={ slider.onInputFocus } onBlur={ slider.onInputBlur }
                onMouseDown={ slider.onHandleMouseDown } onKeyDown={ slider.onHandleKeyDown }>

                { isDefined(value) && value !== "" ? this.renderValue(slider) : null }
            </button>
        );
    },

    renderBar(slider) {
        return (
            <div className={ slider.element("bar") }>
                { this.renderHandle(slider) }
            </div>
        );
    },

    renderValue(slider) {
        const { value } = slider.props;

        return (
            <label className={ slider.element("value") }>{ value }</label>
        );
    },

    renderLabel(slider, prop) {
        return (
            <div className={ slider.element("label", { [prop]: true }) }>
                { slider.props[prop] }
            </div>
        );
    },

    render(slider) {
        const { max, min, children, value, disabled } = slider.props;
        const { focus } = slider.state;
        const inputProps = filterInputProps(slider.props);

        const inputValue = nvl(value, "");
        const error = isDefined(value) && (isNaN(value) || value > max || value < min);

        return (
            <Input { ...inputProps } focus={ focus } error={ error }
                className={ slider.block() }>
                <input type="hidden" value={ inputValue } tabIndex={ -1 } disabled={ disabled } />
                { this.renderLabel(slider, "min") }
                { this.renderLabel(slider, "max") }
                { this.renderBar(slider) }
                { children }
            </Input>
        );
    }
};
