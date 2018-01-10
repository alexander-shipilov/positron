import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class Element extends PropsOwner {
    static propTypes = {
        children: PropTypes.node,
        ref: PropTypes.func,

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
}
