// @flow

export function findScrollParents(element: HTMLElement): HTMLElement[] {
    const result = [];
    let parent = element.parentNode;

    while (parent) {
        if (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight) {
            result.push(parent);
        }

        parent = parent.parentNode;
    }

    if (result.length === 0) {
        result.push(document);
    }

    return result;
}
