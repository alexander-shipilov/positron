import { ORIENTATION_HORIZONTAL, ORIENTATION_VERTICAL } from "positron-core/constants/orientations";
import { OVERFLOW_HIDDEN, OVERFLOW_SCROLL } from "positron-core/constants/overflows";
import React from "react";

import { ScrollBar } from "./ScrollBar";

export const ScrollAreaRenderer = {
    renderContent(scrollArea) {
        const { children } = scrollArea.props;

        return (
            <div className={ scrollArea.element("content") }>
                {children}
            </div>
        );
    },

    renderInner(scrollArea) {
        const { state, onScroll } = scrollArea;
        const { scrollSize } = state;

        const style = scrollSize === void 0 ? { visibility: "hidden" } : {
            marginRight: -scrollSize,
            marginBottom: -scrollSize
        };

        return (
            <div ref="inner" className={ scrollArea.element("inner") } style={ style } onScroll={ onScroll }>
                {this.renderContent(scrollArea)}
            </div>
        );
    },

    renderScrollBar(scrollArea, orientation, overflow) {
        const { state, onScroll } = scrollArea;
        const { scroll: scrollState } = state;

        let bar;
        if (overflow !== OVERFLOW_HIDDEN && (overflow === OVERFLOW_SCROLL || scrollState)) {
            bar = <ScrollBar { ...{ scroll: scrollState[orientation], orientation, onScroll } } />;
        }

        return bar;
    },

    render(scrollArea) {
        const { props, state, onScroll } = scrollArea;
        const { overflowX, overflowY } = props;
        const { scroll: scrollState } = state;

        const className = scrollArea.block({
            overflowX,
            overflowY,
            [ORIENTATION_HORIZONTAL]: scrollState[ORIENTATION_HORIZONTAL],
            [ORIENTATION_VERTICAL]: scrollState[ORIENTATION_HORIZONTAL]
        });

        return (
            <div className={ className } onMouseEnter={ onScroll }>
                {this.renderInner(scrollArea)}
                {this.renderScrollBar(scrollArea, ORIENTATION_VERTICAL, overflowY)}
                {this.renderScrollBar(scrollArea, ORIENTATION_HORIZONTAL, overflowX)}
            </div>
        );
    }
};
