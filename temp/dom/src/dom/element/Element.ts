import type { Attr } from "../attribute/Attr";
import type { List } from "../List";
import { Node } from "../node/Node";
import { AssignedSlot } from "../slottable/AssignedSlot";
import { Slottable } from "../slottable/Slottable";
import {
  assignedSlot,
  manualSlotAssignment,
} from "../slottable/Slottable.symbols";
import { CustomElementState } from "./CustomElementState";
import {
  attributeList,
  customElementDefinition,
  customElementState,
} from "./Element.symbols";
import { ElementShadowRoot } from "./ElementShadowRoot";

/**
 * https://dom.spec.whatwg.org/#concept-element
 *
 * Element nodes are simply known as elements.
 */
export abstract class Element extends Node implements Slottable {
  abstract [assignedSlot]: AssignedSlot;

  abstract [attributeList]: List<Attr>;

  abstract [customElementDefinition]: string;

  abstract [customElementState]: CustomElementState;

  abstract is: string | null;

  abstract localName: string;

  abstract [manualSlotAssignment]: Element | null;

  abstract name: string;

  abstract namespace: string;

  abstract namespacePrefix: string | null;

  /**
   * [Elements] also have an associated shadow root (null or a shadow root).
   * It is null unless otherwise stated.
   */
  abstract shadowRoot: ElementShadowRoot;

  /**
   * An [element] is a [shadow host] if its [shadow root] is non-null.
   */
  isShadowHost(): this is Element & {
    shadowRoot: Exclude<ElementShadowRoot, null>;
  } {
    return this.shadowRoot !== null;
  }
}
