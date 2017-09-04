import { Component } from "/Component";
import { OVERFLOW_AUTO } from "positron-core/src/constants/overflows";

import "./ScrollArea.scss";
import { ScrollAreaModel } from "./ScrollAreaModel";
import { ScrollAreaPropTypes } from "./ScrollAreaPropTypes";
import { ScrollAreaRenderer } from "./ScrollAreaRenderer";

let scrollSize;

export class ScrollArea extends Component {
    onBarScroll = (orientation, scrollPos) => {
        this.setScroll(orientation, scrollPos);
    };

    onScroll = () => {
        this.setScrollState();
    };

    onWindowResize = () => {
        this.setTimeout(this.onScroll, 300);
    };

    constructor(...args) {
        super(...args);

        this.initState({
            scroll: new ScrollAreaModel(),
            scrollSize: scrollSize
        });
    }

    componentDidMount() {
        this.addEventListener(window, "resize", this.onWindowResize);
        this.onScroll();
    }

    componentDidUpdate() {
        this.onScroll();
    }

    setScroll(orientation, scrollPos) {
        ScrollAreaModel.setScrollPos(this.refs.inner, orientation, scrollPos);
    }

    setScrollState() {
        const { inner } = this.refs;
        const { scroll: scrollState } = this.state;

        if (scrollSize === void 0) {
            scrollSize = inner.offsetWidth - inner.clientWidth;
        }

        this.setState({
            scrollSize,
            scroll: scrollState.assign(ScrollAreaModel.getScrollState(inner))
        });
    }
}

ScrollArea.initPropTypes(ScrollAreaPropTypes).initDefaultProps({
    renderer: ScrollAreaRenderer,
    overflowX: OVERFLOW_AUTO,
    overflowY: OVERFLOW_AUTO
});
