import { Rect, Bounds } from "positron-dom";
import { MOVE_HORIZONTAL, MOVE_VERTICAL, MOVE_BOTH } from "./MoveHandle";

export function getInsideConstraint(bounds) {
    function constraint({ area, target, direction }) {
        let constraint = {};

        if (direction === MOVE_BOTH || direction === MOVE_HORIZONTAL) {
            Object.assign(constraint, { left: 0, width: area.clientWidth - target.offsetWidth });
        }

        if (direction === MOVE_BOTH || direction === MOVE_VERTICAL) {
            Object.assign(constraint, { top: 0, height: area.clientHeight - target.offsetHeight });
        }

        return new Rect(constraint);
    }

    return bounds ? (...args) => new Bounds(bounds).contourIn(constraint(...args)) : constraint;
}
