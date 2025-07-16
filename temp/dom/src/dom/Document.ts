import { Node } from "./node/Node";

export abstract class Document extends Node {
  abstract URL: unknown;

  abstract contentType: unknown;

  abstract encoding: unknown;

  abstract mode: unknown;

  abstract origin: unknown;

  abstract type: unknown;

  abstract adoptNode<T extends Node>(node: Node): T;
}
