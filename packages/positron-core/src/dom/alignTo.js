// @flow

import { AlignProps, BoundedRect, Bounds, Rect } from "../dom-rect";

export function alignTo(el: HTMLElement, toEl: HTMLElement, ...props: AlignProps[]): Bounds[] {
    const { offsetParent: parent } = el;

    return props.map((props) => BoundedRect.fromElement(toEl, parent).align(Rect.fromElement(el, parent), props));
}
