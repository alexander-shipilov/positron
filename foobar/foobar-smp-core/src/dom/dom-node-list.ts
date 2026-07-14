import type { DomList } from "./dom-list";
import type { DomNode } from "./dom-node";

/**
 * The {@link DomNodeList} objects are collections of nodes, usually returned by
 * properties such as {@link DomNode.childNodes}.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeList)
 */
export type DomNodeList = DomList<DomNode>;
