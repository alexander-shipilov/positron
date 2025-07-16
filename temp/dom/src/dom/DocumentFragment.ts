import type { Element } from "./element/Element";
import { Node } from "./node/Node";

/**
 * https://dom.spec.whatwg.org/#interface-documentfragment
 */
export abstract class DocumentFragment extends Node {
  /**
   * A [DocumentFragment] node has an associated [host] (null or an [element]
   * in a different node tree). It is `null` unless otherwise stated.
   */
  abstract host: Element | null;
}
