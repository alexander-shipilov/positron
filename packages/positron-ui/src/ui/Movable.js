// @flow

import { DIRECTION_BOTH, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from "positron-core/constants/directions";
import { translateStyle } from "positron-core/dom";
import { Point, Rect } from "positron-core/dom-rect";
import { findDOMNode } from "react-dom";
import { EventTarget } from "./EventTarget";

export class Movable extends EventTarget {
    initMovable() {
    }

    getMoveArea({ target }): HTMLElement {
        return target.offsetParent;
    }

    getMoveDirection() {
        return DIRECTION_BOTH;
    }

    getMoveConstraint() {
        return null;
    }

    getMoveGhost(): ?HTMLElement {
        return null;
    }

    getMoveOffset(): ?Point {
        return null;
    }

    getMoveTarget(): HTMLElement {
        return findDOMNode(this);
    }

    move(props, { left, top }) {
        const { ghost, target } = props;

        Object.assign((ghost || target).style, translateStyle(left, top));
    }

    moveToPoint(props, point) {
        const { constraint, direction, offset, area } = props;

        if (direction === DIRECTION_VERTICAL) {
            point = point.assign({ left: void 0 });
        }
        if (direction === DIRECTION_HORIZONTAL) {
            point = point.assign({ top: void 0 });
        }
        if (offset) {
            point = point.moveBy(point);
        }

        if (constraint) {
            point = constraint(point);
        }

        point = point.relativeTo(Point.fromElement(area));

        this.move(props, point);
        this.onMove(props);
    }

    moveToElement(props, toElement) {
        this.moveToPoint(props, Point.fromElement(toElement));
    }

    moveToEvent(props, event) {
        this.moveToPoint(props, Point.fromClientEvent(event));
    }

    endMove(props) {
        const { ghost } = props;

        this.onMoveEnd(props);

        if (ghost) {
            ghost.parentNode.removeChild(ghost);
        }
    }

    endMoveToEvent(props, event) {
        this.moveToEvent(props, event);
        this.removeEventListeners(props.listeners);
        this.endMove(props);
    }

    startMoveToEvent(props, event) {
        props.listeners = [
            this.addEventListener(window, "mousemove", this.moveToEvent.bind(this, props), true),
            this.addEventListener(window, "mouseup", this.endMoveToEvent.bind(this, props), true)
        ];

        this.moveToEvent(props, event);
    }

    onMove(props) {
    }

    onMoveEnd(props) {
        const { target, ghost } = props;

        document.body.classList.remove("moving");
        (target || ghost).classList.remove(this.modifiers({ moving: true }));
    }

    onMoveStart(props) {
        const { target, ghost } = props;

        document.body.classList.add("moving");
        (target || ghost).classList.add(this.modifiers({ moving: true }));
    }

    startMove(event) {
        const props = {};

        props.direction = this.getMoveDirection(props, event);
        props.target = this.getMoveTarget(props, event);
        props.area = this.getMoveArea(props, event);
        props.offset = this.getMoveOffset(props, event);
        props.constraint = this.getMoveConstraint(props, event);
        props.ghost = this.getMoveGhost(props, event);

        if (props.ghost) {
            props.ghost = props.ghost === true ? Movable.getMoveGhost(props.target) : props.ghost;
            props.area.appendChild(props.ghost);
        }

        this.onMoveStart(props);
        this.startMoveToEvent(props, event);
    }

    static getMoveGhost(target) {
        const ghost = Object.assign(document.createElement("div"), { innerHTML: target.outerHTML }).childNodes[0];
        const rect = Rect.fromElement(target).moveTo({ left: 0, width: 0 });

        ghost.classList.add("move-ghost");

        Object.assign(ghost.style, rect.toStyle(), {
            position: "absolute",
            pointerEvents: "none",
            transition: "none",
            transform: "none",
            WebkitTransform: "none"
        });

        return ghost;
    }
}
