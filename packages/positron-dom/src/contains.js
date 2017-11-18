// @flow

export function contains(el: HTMLElement, childEl: HTMLElement): boolean {
    return Boolean(el && childEl && (
        typeof el.contains === "function"
            ? el.contains(childEl)
            : el.compareDocumentPosition(childEl) & 16
    ));
}
