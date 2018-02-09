import { Base } from "positron-core";
import { addEventListener, Point, Rect, translateStyle } from "positron-dom";

export const MOVE_HORIZONTAL = "horizontal";
export const MOVE_VERTICAL = "vertical";
export const MOVE_BOTH = "both";

function getMoveGhost(target) {
    const elPos = target.getBoundingClientRect();
    let ghost;

    ghost = Object.assign(document.createElement("div"), { innerHTML: target.outerHTML }).childNodes[0];
    ghost.className = "move-ghost" + (ghost.className ? " " + ghost.className : "");

    Object.assign(ghost.style, {
        position: "absolute",
        top: 0,
        left: 0,
        width: elPos.width + "px",
        height: elPos.height + "px",
        pointerEvents: "none",
        transition: "none",
        transform: "none",
        WebkitTransform: "none"
    });

    return ghost;
}

function getMoveOffset(target, event) {
    const rect = Rect.fromElement(target);
    const client = event.changedTouches ? event.changedTouches[0] : event;

    return {
        x: rect.left - client.clientX,
        y: rect.top - client.clientY
    };
}


function doMove(handle, event) {
    const { offset, area } = handle;
    const { clientX, clientY } = event.changedTouches ? event.changedTouches[0] : event;

    if (handle.onMove) {
        handle.onMove(event);
    }

    handle.moveTo(new Point({ left: clientX + offset.x, top: clientY + offset.y }).relativeTo(Rect.fromElement(area)));
}

function doMoveMouse(handle, event) {
    event.stopPropagation();
    event.preventDefault();

    doMove(handle, event);
}

function doMoveTouch(handle, event) {
    doMove(handle, event);
}

function stopMove(handle) {
    document.body.classList.remove("moving");
    handle.stopMove();
}

function stopMoveMouse(handle, event) {
    doMoveMouse(handle, event);
    stopMove(handle, event);
}

function stopMoveTouch(handle, event) {
    doMoveTouch(handle, event);
    stopMove(handle, event);
}

function addMoveListeners(event, handle) {
    const listeners = handle.listeners = [];

    if (event.type === "touchstart") {
        listeners.push(
            addEventListener(window, "touchmove", doMoveTouch.bind(null, handle), true),
            addEventListener(window, "touchup touchend touchcancel", stopMoveTouch.bind(null, handle), true)
        );
    } else {
        listeners.push(
            addEventListener(window, "mousemove", doMoveMouse.bind(null, handle), true),
            addEventListener(window, "mouseup", stopMoveMouse.bind(null, handle), true)
        );
    }
}

function removeMoveListeners(handle) {
    const { listeners } = handle;

    if (listeners) {
        listeners.forEach((removeListener) => {
            removeListener();
        });

        delete handle.listeners;
    }
}

function setHandle(handle, event, ...props) {
    let { target, area, ghost, offset } = Object.assign(handle, ...props);

    if (!target) {
        target = event.currentTarget;
    }

    if (!area) {
        area = target.offsetParent;
    }

    if (ghost === true) {
        ghost = getMoveGhost(target);
    }

    if (ghost) {
        area.appendChild(ghost);
    }

    handle = Object.assign(handle, {
        target, area, ghost,
        offset: Object.assign(getMoveOffset(target, event), offset)
    });

    addMoveListeners(event, handle);
}

function startMove(handle, event, ...props) {
    document.body.classList.add("moving");

    setHandle(handle, event, ...props);

    if (event.type === "touchstart") {
        doMoveTouch(handle, event);
    } else {
        doMoveMouse(handle, event);
    }
}

function clearHandle(handle) {
    removeMoveListeners(handle);

    delete handle.target;
    delete handle.area;
    delete handle.offset;

    if (handle.ghost) {
        let ghost = handle.ghost;

        delete handle.ghost;
        if (ghost.parentNode) {
            ghost.parentNode.removeChild(ghost);
        }
    }

    return handle;
}

export class MoveHandle extends Base {
    onStopMove = null;

    onStartMove = null;

    move(point) {
        const { ghost, target } = this;

        translateStyle(ghost || target, point);
    }

    moveTo(point) {
        const { direction, constraint } = this;
        const props = {};

        if (constraint) {
            point = point.constrain(constraint(this));
        }

        if (direction === MOVE_BOTH || direction === MOVE_HORIZONTAL) {
            props.left = point.x;
        }

        if (direction === MOVE_BOTH || direction === MOVE_VERTICAL) {
            props.top = point.y;
        }

        this.move(props);
    }

    stopMove() {
        if (typeof this.onStopMove === "function") {
            this.onStopMove(this);
        }

        clearHandle(this);
    }

    startMove(event, ...props) {
        if (typeof this.onStartMove === "function") {
            this.onStartMove();
        }

        startMove(this, event, ...props);
    }
}


