import { Component } from "/Component";
import { Movable } from "../Movable";

import "./ScrollBar.scss";
import { ScrollBarPropTypes } from "./ScrollBarPropTypes";
import { ScrollBarRenderer } from "./ScrollBarRenderer";

export class ScrollBar extends Component.implement(Movable) {
    onEndButtonTick = () => {

    };

    onMouseDown = () => {

    };

    onStartButtonTick = () => {

    };

    constructor(...args) {
        super(...args);

        this.initMovable();
    }
}

ScrollBar.initPropTypes(ScrollBarPropTypes).initDefaultProps({
    renderer: ScrollBarRenderer
});
