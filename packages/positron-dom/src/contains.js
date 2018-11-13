// @flow

export function contains(el: HTMLElement, childEl: HTMLElement): boolean {
  let retValue = false;

  if (el && childEl) {
    if (typeof el.contains === "function") {
      retValue = el.contains(childEl);
    } else {
      retValue = el.compareDocumentPosition(childEl) & 16 !== 0;
    }
  }

  return retValue;
}
