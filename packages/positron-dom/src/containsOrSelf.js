// @flow

import { contains } from "./contains";

export function containsOrSelf(el: HTMLElement, childEl: HTMLElement): boolean {
    return el === childEl || contains(el, childEl);
}
