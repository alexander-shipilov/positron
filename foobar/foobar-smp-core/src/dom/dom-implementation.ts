import type { DomDocument } from "./dom-document";

export interface DomImplementation {
  createDocument(): DomDocument;
}
