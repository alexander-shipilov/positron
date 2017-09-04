import { Component } from "/Component";
import { findDOMNode } from "react-dom";

import "./RangePicker.scss";
import { DRAG_SIDE_BOTH, DRAG_SIDE_FROM, DRAG_SIDE_TO, RangePickerPropTypes } from "./RangePickerPropTypes";
import { RangePickerRenderer } from "./RangePickerRenderer";


function compareRanges(range1, range2) {
    return range1 && range2
        ? range1.from === range2.from || range1.to !== range2.to
        : !range1 && !range2;
}

function getRangeState(props, prevValue) {
    const { range: { from: rangeFrom, to: rangeTo }, step } = props;
    const { from: prevFrom, to: prevTo } = prevValue;

    let nextFrom;
    let nextTo;

    nextFrom = Math.max(prevFrom, rangeFrom);
    if (nextFrom !== rangeFrom) {
        nextFrom = Math.min(Math.ceil(nextFrom / step) * step, rangeTo);
    }

    nextTo = Math.min(prevTo, rangeTo);
    if (nextTo !== rangeTo) {
        nextTo = Math.max(Math.floor(nextTo / step) * step, nextFrom);
    }

    return { value: { from: nextFrom, to: nextTo } };
}

const getRangeStateFromProps = (props) => {
    const { initialValue, range } = props;

    return getRangeState(props, Object.assign({}, range, initialValue));
};


export class RangePicker extends Component {
    drag = (deltaX) => this.setDragState(deltaX);

    constructor(props, context) {
        super(props, context);

        this.handleMouseDownFrom = this.handleMouseDown.bind(this, DRAG_SIDE_FROM);
        this.handleMouseDownTo = this.handleMouseDown.bind(this, DRAG_SIDE_TO);
        this.handleTouchStartFrom = this.handleTouchStart.bind(this, DRAG_SIDE_FROM);
        this.handleTouchStartTo = this.handleTouchStart.bind(this, DRAG_SIDE_TO);
    }

    componentWillMount() {
        this.setState(this.initialState());
    }

    componentWillReceiveProps(nextProps) {
        const { range: currRange, initialValue: currValue, step: currStep } = this.props;
        const { range: nextRange, initialValue: nextValue, step: nextStep } = nextProps;

        const changed = currStep !== nextStep
            || !compareRanges(currRange, nextRange)
            || !compareRanges(currValue, nextValue);

        if (changed) {
            this.setState(getRangeStateFromProps(nextProps));
        }
    }

    endDrag(deltaX) {
        this.dragProps.unbind();

        this.setDragState(deltaX, () => {
            this.dragProps = null;
            this.setState({ side: null });

            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        });
    }

    handleMouseDown(side, event) {
        if (!this.dragProps) {
            const startX = event.screenX;

            event.preventDefault();
            this.startDrag(side, {
                "mousemove": this.handleMouseMove.bind(this, startX),
                "mouseup": this.handleMouseUp.bind(this, startX)
            });
        }
    };

    handleMouseMove(startX, event) {
        this.drag(event.screenX - startX);
    }

    handleMouseUp(startX, event) {
        this.endDrag(event.screenX - startX);
    }

    handleTouchMove(startX, event) {
        this.drag(event.changedTouches[0].screenX - startX);
    };

    handleTouchStart(side, event) {
        if (!this.dragProps) {
            const startX = event.changedTouches[0].screenX;

            event.preventDefault();
            this.startDrag(side, {
                "touchmove": this.handleTouchMove.bind(this, startX),
                "touchup touchend touchcancel": this.handleTouchUp.bind(this, startX)
            });
        }
    };

    handleTouchUp(startX, event) {
        this.endDrag(event.changedTouches[0].screenX - startX);
    };

    initialState() {
        return getRangeStateFromProps(this.props);
    }

    setDragState(deltaX, callback) {
        const { side, ratio, dragValue: currDragValue } = this.dragProps;

        const isBoth = side === DRAG_SIDE_BOTH;
        const nextDragValue = currDragValue + deltaX * ratio;

        let { nextSide, value: nextValue } = Object.assign({}, this.state);

        if (side === DRAG_SIDE_FROM || (isBoth && nextDragValue < currDragValue)) {
            nextSide = DRAG_SIDE_FROM;
            nextValue.from = Math.min(nextDragValue, nextValue.to);
            if (isBoth) {
                nextValue.to = currDragValue;
            }
        }

        if (side === DRAG_SIDE_TO || (isBoth && nextDragValue > currDragValue)) {
            nextSide = DRAG_SIDE_TO;
            nextValue.to = Math.max(nextDragValue, nextValue.from);
            if (isBoth) {
                nextValue.from = currDragValue;
            }
        }

        return this.setState(Object.assign({ side: nextSide }, getRangeState(this.props, nextValue)), callback);
    }

    startDrag(side, listeners) {
        const elWidth = findDOMNode(this).querySelector(".range-picker__bar").getBoundingClientRect().width;

        const { range: { from: rangeFrom, to: rangeTo } } = this.props;
        const { value: { from, to } } = this.state;


        if (from === to) {
            side = DRAG_SIDE_BOTH;
        }

        this.dragProps = {
            side,
            dragValue: side === DRAG_SIDE_TO ? to : from,
            ratio: (rangeTo - rangeFrom) / elWidth,
            unbind: addEventListener(listeners)
        };

        this.setState({ side: side });
    }
}

RangePicker.initPropTypes(RangePickerPropTypes).initDefaultProps({
    renderer: RangePickerRenderer,
    range: null,
    initialValue: null,
    step: 1,
    disabled: false,
    label: "",
    formatter: (value) => value
});
