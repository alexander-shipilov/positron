import { Node } from "./node/Node";

export abstract class DocumentType extends Node {
  abstract name: string;

  abstract publicID: string;

  abstract systemID: string;
}
