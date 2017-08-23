import { Component } from "/Component";

import "./ScrollBar.scss";
import { ScrollBarPropTypes } from "./ScrollBarPropTypes";
import { ScrollBarRenderer } from "./ScrollBarRenderer";
import { Movable } from "/ui/Movable";

export class ScrollBar extends Component.implement(Movable) {
    init(...args) {
        super.init(...args);
        this.initMovable();
    }

    onMouseDown() {

    }

    onStartButtonTick() {

    }

    onEndButtonTick() {

    }
}

ScrollBar.initPropTypes(ScrollBarPropTypes).initDefaultProps({
    renderer: ScrollBarRenderer
});
