import { MOVE_HORIZONTAL, MOVE_VERTICAL } from "utils/html";

export const OVERFLOW_AUTO = "auto";
export const OVERFLOW_SCROLL = "scroll";
export const OVERFLOW_HIDDEN = "hidden";
export const OVERFLOW_VISIBLE = "visible";
export const OVERFLOWS = [OVERFLOW_AUTO, OVERFLOW_SCROLL, OVERFLOW_HIDDEN, OVERFLOW_VISIBLE];

export const ORIENTATION_VERTICAL = MOVE_VERTICAL;
export const ORIENTATION_HORIZONTAL = MOVE_HORIZONTAL;
export const ORIENTATIONS = [ORIENTATION_VERTICAL, ORIENTATION_HORIZONTAL];

function getScrollProps(el, orientation) {
    const isHorizontal = orientation === ORIENTATION_HORIZONTAL;

    return {
        clientSize: getClientSize(el, orientation),
        scrollSize: el["scroll" + (isHorizontal ? "Width" : "Height")],
        scrollPos: el["scroll" + (isHorizontal ? "Left" : "Top")]
    };
}

function isScrollable({ scrollSize, clientSize }) {
    return scrollSize > clientSize;
}

export function getScrollState(el, orientation) {
    const scrollProps = getScrollProps(el, orientation);

    return isScrollable(scrollProps) ? scrollProps : null;
}

export function getClientSize(el, orientation) {
    return el[orientation === ORIENTATION_HORIZONTAL ? "clientWidth" : "clientHeight"];
}

export function hasScroll(overflow) {
    return overflow === OVERFLOW_AUTO || overflow === OVERFLOW_SCROLL;
}
