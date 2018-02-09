import { compact } from "positron-core";
import { translateStyle } from "positron-dom";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { getInsideConstraint, MoveHandle } from "utils/html";
import { ScrollBarModel } from "./ScrollBarModel";

import { getClientSize, ORIENTATION_HORIZONTAL, ORIENTATIONS } from "./utils";

export class ScrollBar extends Component {
    static propTypes = compact(
        Element,
        {
            orientation: PropTypes.oneOf(ORIENTATIONS).isRequired,
            scroll: PropTypes.instanceOf(ScrollBarModel)
        }
    );

    onHandleDragStart = (event) => {
        const { moveHandle, props: { orientation } } = this;

        moveHandle.startMove(event, { direction: orientation });
    };

    move = (props) => {
        const { bar, handle } = this;

        if (handle) {
            const { scroll: { scrollSize }, orientation, onScroll } = this.props;
            const size = getClientSize(bar, orientation);
            const position = props[orientation === ORIENTATION_HORIZONTAL ? "left" : "top"];

            onScroll(orientation, scrollSize * position / size);
        } else {
            this.stopMove();
        }
    };

    componentDidMount() {
        this.moveHandle = new MoveHandle({
            move: this.move,
            constraint: getInsideConstraint()
        });

        this.updateHandle();
    }

    componentDidUpdate() {
        this.updateHandle();
    }

    componentWillUnmount() {
        this.stopMove();
        delete this.moveHandle;
    }

    stopMove() {
        const { moveHandle } = this;

        if (moveHandle) {
            moveHandle.stopMove();
        }
    }

    updateHandle() {
        const { bar, handle } = this;

        if (handle) {
            const { orientation, scroll: { relativePos, relativeSize } } = this.props;
            const size = getClientSize(bar, orientation);

            translateStyle(handle, {
                [orientation === ORIENTATION_HORIZONTAL ? "left" : "top"]: (size * relativePos),
                [orientation === ORIENTATION_HORIZONTAL ? "width" : "height"]: (relativeSize * 100) + "%"
            });
        }
    }

    renderHandle() {
        return (
            <div ref={ this.ref("handle") } className="scroll-handle"
                onMouseDown={ this.onHandleDragStart }
                onTouchStart={ this.onHandleDragStart } />
        );
    }

    render() {
        const { orientation, scroll } = this.props;

        return (
            <div { ...Element.filterProps(this.props) }
                className={ this.block({ [orientation]: true, disabled: !scroll }) }>
                <i className={ this.element("icon", { prev: true }) } />
                <div ref={ this.ref("bar") } className={ this.element("bar") }>
                    { scroll ? this.renderHandle() : null }
                </div>
                <i className={ this.element("icon", { next: true }) } />
            </div>
        );
    }
}
