import { Node } from "../node/Node";

export abstract class Attr extends Node {
  abstract localName: unknown;

  abstract namespace: unknown;

  abstract namespacePrefix: unknown;

  abstract value: unknown;
}
