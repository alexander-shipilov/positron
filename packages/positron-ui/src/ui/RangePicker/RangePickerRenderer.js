import React from "react";
import { DRAG_SIDE_BOTH, DRAG_SIDE_FROM, DRAG_SIDE_TO } from "./RangePickerPropTypes";

function toPercent(value, range) {
    const { from, to } = range;

    return 100 * (value - from) / (to - from);
}


export const RangePickerRenderer = {
    renderHandle(rangePicker, side) {
        const { side: sideState } = rangePicker.state;
        const isFrom = side === DRAG_SIDE_FROM;

        const className = rangePicker.element("handle", {
            from: isFrom,
            to: !isFrom,
            dragging: sideState === DRAG_SIDE_BOTH || sideState === side
        });

        return (
            <label className={ className }
                onMouseDown={ isFrom ? rangePicker.handleMouseDownFrom : rangePicker.handleMouseDownTo }
                onTouchStart={ isFrom ? rangePicker.handleTouchStartFrom : rangePicker.handleTouchStartTo } />
        );
    },

    renderSlider(rangePicker) {
        const { label, formatter, range } = rangePicker.props;
        const { value: { from, to } } = rangePicker.state;
        const style = {
            left: `${toPercent(from, range)}%`,
            right: `${100 - toPercent(to, range)}%`
        };

        return (
            <div className={ this.element("slider") }>
                <div className={ this.element("bar") }>
                    <div className={ this.element("range") } style={ style }>
                        { this.renderHandle(rangePicker, DRAG_SIDE_FROM) }
                        { this.renderHandle(rangePicker, DRAG_SIDE_TO) }
                    </div>
                </div>
                <label className={ this.element("value", { from: true }) }>{ formatter(from) }</label>
                <label className={ this.element("value", { to: true }) }>{ formatter(to) }</label>
            </div>
        );
    },

    render(rangePicker) {
        const { disabled } = rangePicker.props;

        return (
            <div className={ rangePicker.block("range-picker", { disabled }) }>
                { this.renderSlider() }
            </div>
        );
    }
};
