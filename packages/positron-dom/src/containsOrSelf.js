// @flow

import { contains } from "./contains";

export function containsOrSelf(el: HTMLElement, childEl: HTMLElement): boolean {
    let retValue = false;

    if (el && childEl) {
        retValue = el === childEl || contains(el, childEl);
    }

    return retValue;
}
