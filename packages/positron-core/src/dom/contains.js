const DOCUMENT_POSITION_CONTAINED_BY = global.Node.DOCUMENT_POSITION_CONTAINED_BY || 16;

export const contains = document.compareDocumentPosition
    ? function contains(el, childEl) {
        return !!(el && el.compareDocumentPosition(childEl) & DOCUMENT_POSITION_CONTAINED_BY);
    }
    : function contains(el, childEl) {
        return el && el.contains(childEl);
    };
