import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { ScrollAreaModel } from "./ScrollAreaModel";
import { ScrollBar } from "./ScrollBar";
import {
    getScrollState,
    hasScroll,
    ORIENTATION_HORIZONTAL,
    ORIENTATION_VERTICAL,
    OVERFLOW_SCROLL,
    OVERFLOWS
} from "./utils";

let scrollSize;

export class ScrollArea extends Component {
    static propTypes = {
        children: PropTypes.element,
        overflowX: PropTypes.oneOf(OVERFLOWS).isRequired,
        overflowY: PropTypes.oneOf(OVERFLOWS).isRequired
    };

    static defaultProps = {
        overflowX: "auto",
        overflowY: "auto"
    };

    state = {
        scroll: new ScrollAreaModel(),
        scrollSize: scrollSize
    };

    onScroll = () => {
        this.setScrollState();
    };

    onBarScroll = (orientation, scrollPos) => {
        this.setScroll(orientation, scrollPos);
    };

    onWindowResize = () => {
        this.setTimeout(this.setScrollState, 300);
    };

    onMouseEnter = () => {
        this.setScrollState();
    };

    setScrollState() {
        const { content } = this;

        if (content) {
            const { overflowX, overflowY } = this.props;
            const { scroll } = this.state;
            const HORIZONTAL = ORIENTATION_HORIZONTAL;
            const VERTICAL = ORIENTATION_VERTICAL;

            if (scrollSize === void 0) {
                scrollSize = content.offsetWidth - content.clientWidth;
            }

            this.setState({
                scrollSize,
                scroll: scroll.set({
                    [HORIZONTAL]: hasScroll(overflowX) ? getScrollState(content, HORIZONTAL) : null,
                    [VERTICAL]: hasScroll(overflowY) ? getScrollState(content, VERTICAL) : null
                })
            });
        }
    }

    componentDidUpdate() {
        this.setScrollState();
    }

    componentDidMount() {
        this.setScrollState();
        this.addDOMListener(window, "resize", this.onWindowResize);
    }

    setScroll(orientation, scrollPos) {
        this.content[orientation === ORIENTATION_HORIZONTAL ? "scrollLeft" : "scrollTop"] = scrollPos;
    }

    renderScrollBar(orientation, overflow) {
        const scroll = this.state.scroll[orientation];
        const shouldRender = hasScroll(overflow) && (overflow === OVERFLOW_SCROLL || !!scroll);

        return shouldRender
            ? <ScrollBar { ...{ orientation, scroll } } onScroll={ this.onBarScroll } />
            : null;
    }

    renderChildren() {
        const { children: child } = this.props;
        const { scrollSize } = this.state;
        const style = scrollSize === void 0 ? { visibility: "hidden" }
            : { marginRight: -scrollSize, marginBottom: -scrollSize };

        return this.renderElement(child, "content", null, {
            ref: this.ref("content"),
            style,
            onScroll: this.onScroll
        });
    }

    render() {
        const { overflowX, overflowY } = this.props;
        const { scroll } = this.state;

        const className = this.block({
            overflowX,
            overflowY,
            [ORIENTATION_HORIZONTAL]: Boolean(scroll[ORIENTATION_HORIZONTAL]),
            [ORIENTATION_VERTICAL]: Boolean(scroll[ORIENTATION_VERTICAL])
        });

        return (
            <div { ...Element.filterProps(...this.props) } className={ className } onMouseEnter={ this.onMouseEnter }>
                { this.renderChildren() }
                { this.renderScrollBar(ORIENTATION_VERTICAL, overflowY) }
                { this.renderScrollBar(ORIENTATION_HORIZONTAL, overflowX) }
            </div>
        );
    }
}
