import { Component } from "/Component";
import { findDOMNode } from "react-dom";
import { MouseDownRepeaterOwner } from "../MouseDownRepeaterOwner";

import "./RepeatButton.scss";
import { RepeatButtonPropTypes } from "./RepeatButtonPropTypes";
import { RepeatButtonRenderer } from "./RepeatButtonRenderer";

/** @extends MouseDownRepeaterOwner */
export class RepeatButton extends Component.implement(MouseDownRepeaterOwner) {
    constructor(...args) {
        super(...args);

        this.initMouseDownRepeaterOwner();
    }

    componentDidMount() {
        const { interval, firstInterval } = this.props;

        this.setMouseDownRepeaterProps({ interval, firstInterval });
        this.addRepeatMouseDownListener(findDOMNode(this));
    }

    componentWillReceiveProps({ disabled, interval, firstInterval }) {
        const { interval: prevInterval, firstInterval: prevFirstInterval } = this.props;

        if (interval !== prevInterval || firstInterval !== prevFirstInterval) {
            this.setMouseDownRepeaterProps({ interval, firstInterval });
        }
        if (disabled) {
            this.stopMouseDownRepeater();
        }
    }

    onRepeatMouseDown(event, count) {
        const { onTick } = this.props;

        if (onTick) {
            onTick(count);
        }
    }

    onRepeatMouseDownEnd(event, count) {
        const { onTickStop } = this.props;

        if (onTickStop) {
            onTickStop(count);
        }
    }
}

RepeatButton.initPropTypes(RepeatButtonPropTypes).initDefaultProps({
    renderer: RepeatButtonRenderer,
    interval: 100,
    firstInterval: 500
});
