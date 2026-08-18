import type { DomNode } from "./dom-node";

export interface DomNodeFilter {
  acceptNode(node: DomNode): number;
}

// const FILTER_ACCEPT: number = 1;
// const FILTER_REJECT: number = 2;
// const FILTER_SKIP: number = 3;
//
// // Constants for whatToShow
// const SHOW_ALL: number = 0xffffffff;
// const SHOW_ELEMENT: number = 0x1;
// const SHOW_ATTRIBUTE: number = 0x2;
// const SHOW_TEXT: number = 0x4;
// const SHOW_CDATA_SECTION: number = 0x8;
// const SHOW_ENTITY_REFERENCE: number = 0x10; // legacy
// const SHOW_ENTITY: number = 0x20; // legacy
// const SHOW_PROCESSING_INSTRUCTION: number = 0x40;
// const SHOW_COMMENT: number = 0x80;
// const SHOW_DOCUMENT: number = 0x100;
// const SHOW_DOCUMENT_TYPE: number = 0x200;
// const SHOW_DOCUMENT_FRAGMENT: number = 0x400;
// const SHOW_NOTATION: number = 0x800; // legacy
