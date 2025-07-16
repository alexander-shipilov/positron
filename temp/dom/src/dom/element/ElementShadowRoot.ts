import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-element-shadow-root
 *
 * [Elements] also have an associated [shadow root] (null or a [shadow root]).
 * It is null unless otherwise stated. An [element] is a [shadow host] if its
 * [shadow root] is non-null.
 */
export type ElementShadowRoot = Node | null;
