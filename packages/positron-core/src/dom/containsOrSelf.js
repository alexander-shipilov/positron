// @flow

import { contains } from "./contains";

export function containsOrSelf(el: HTMLElement, childEl): boolean {
    return el === childEl || contains(el, childEl);
}
