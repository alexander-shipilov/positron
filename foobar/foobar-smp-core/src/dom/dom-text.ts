import type { DomChildNode } from "./dom-child-node";
import type { DomNode } from "./dom-node";
import type { DomString } from "./dom-string";

export interface DomText extends DomChildNode, DomNode {
  data: DomString;

  readonly length: number;

  readonly wholeText: DomString;

  appendData(data: DomString): void;

  deleteData(offset: number, count: number): void;

  insertData(offset: number, data: DomString): void;

  replaceData(offset: number, count: number, data: DomString): void;

  splitText(offset: number): DomText;

  substringData(offset: number, count: number): DomString;
}
