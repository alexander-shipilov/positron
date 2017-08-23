import { OVERFLOW_AUTO } from "positron-core/constants/overflows";
import { Component } from "/Component";

import "./ScrollArea.scss";
import { ScrollAreaModel } from "./ScrollAreaModel";
import { ScrollAreaPropTypes } from "./ScrollAreaPropTypes";
import { ScrollAreaRenderer } from "./ScrollAreaRenderer";

let scrollSize;

export class ScrollArea extends Component {
    init(...args) {
        super.init(...args);

        this.initState({
            scroll: new ScrollAreaModel(),
            scrollSize: scrollSize
        });

        this.onScroll = this.onScroll.bind(this);
        this.onBarScroll = this.onBarScroll.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
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

    onScroll() {
        this.setScrollState();
    }

    onBarScroll(orientation, scrollPos) {
        this.setScroll(orientation, scrollPos);
    }

    onWindowResize() {
        this.setTimeout(this.onScroll, 300);
    }
}

ScrollArea.initPropTypes(ScrollAreaPropTypes).initDefaultProps({
    renderer: ScrollAreaRenderer,
    overflowX: OVERFLOW_AUTO,
    overflowY: OVERFLOW_AUTO
});
