// @flow

import { contains } from "./contains";

export function containsOrSelf(el: HTMLElement, childEl: HTMLElement): boolean {
    return Boolean(el && childEl && (el === childEl || contains(el, childEl)));
}
