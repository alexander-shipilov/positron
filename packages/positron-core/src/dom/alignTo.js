// @flow

import type { AlignProps } from "../dom-rect";
import { BoundedRect, Bounds, Rect } from "../dom-rect";

export function alignTo(el: HTMLElement, toEl: Element, ...props: AlignProps[]): Bounds[] {
    const parent = el.offsetParent;
    let bounds = [];

    if (parent === null || parent === void 0 || parent instanceof Element) {
        bounds = props.map((props) => BoundedRect.fromElement(toEl, parent).align(Rect.fromElement(el, parent), props));
    }

    return bounds;
}
