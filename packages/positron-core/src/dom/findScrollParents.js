// @flow

export function findScrollParents(element: HTMLElement): Array<HTMLElement | Document> {
    const result = [];
    let parent = element.parentNode;

    while (parent instanceof HTMLElement) {
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
