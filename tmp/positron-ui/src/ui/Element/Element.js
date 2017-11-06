import { addEventListener } from "positron-core/src/dom-event";
import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";

export class Element {
    addEventListener(...args) {
        return this.addUnmountListener(addEventListener(...args));
    }

    addUnmountListener(listener) {
        if (!this.onUnmount) {
            Object.defineProperty(this, "onUnmount", { value: [], writable: true });
        }

        this.onUnmount.push(listener);

        return listener;
    }

    componentWillUnmount() {
        const { onUnmount } = this;

        if (onUnmount) {
            this.onUnmount = null;
            onUnmount.forEach((removeListener) => removeListener());
        }
    }

    initElement() {
    }

    removeEventListeners(listeners) {
        listeners.forEach((removeListener) => {
            const index = this.onUnmount.indexOf(removeListener);

            if (index !== -1) {
                this.onUnmount.splice(index, 1);
                removeListener();
            }
        });
    }
}

export const ElementPropTypes = {
    accessKey: PropTypes.string,
    className: PropTypes.string,
    contentEditable: PropTypes.bool,
    contextMenu: PropTypes.string,
    dir: PropTypes.string,
    draggable: PropTypes.bool,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    spellCheck: PropTypes.bool,
    style: PropTypes.object,
    tabIndex: PropTypes.number,
    title: PropTypes.string,

    onCopy: PropTypes.func,
    onCut: PropTypes.func,
    onPaste: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragExit: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseUp: PropTypes.func,
    onSelect: PropTypes.func,
    onTouchCancel: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchStart: PropTypes.func,
    onScroll: PropTypes.func,
    onWheel: PropTypes.func,
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,
    onAnimationIteration: PropTypes.func,
    onTransitionEnd: PropTypes.func
};

export const filterElementProps = createPropsFilter(ElementPropTypes);
