import type { Document } from "../Document";
import type { Node } from "./Node";

export type NodeAdoptingStep = (node: Node, oldDocument: Document) => void;
