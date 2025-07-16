import type { Document } from "../Document";
import type { Node } from "./Node";

export type NodeCloningStep = (
  copy: Node,
  node: Node,
  document: Document,
  cloneChildren: boolean
) => void;
