import { never } from "@positron/core";

import type { DomString, DomText } from "../dom";
import { DomNodeType } from "../dom";

import type { Document } from "./document";
import { ChildNode } from "./child-node";
import { Node } from "./node";

export const data = Symbol("data");

export class Text extends ChildNode(Node) implements DomText {
  public _data: string;

  public length: number;

  public wholeText: string;

  public get data(): string {
    return this._data;
  }

  public get nodeName(): string {
    return "#text";
  }

  public get nodeType(): DomNodeType {
    return DomNodeType.Text;
  }

  public get nodeValue(): null | string {
    return never("Not implemented");
  }

  public constructor(nodeDocument: Document, nodeData: string = "") {
    super();

    this._document = nodeDocument;
    this._data = nodeData;
  }

  public appendData(data: DomString): void {
    throw new Error("Method not implemented.");
  }

  public deleteData(offset: number, count: number): void {
    throw new Error("Method not implemented.");
  }

  public insertData(offset: number, data: DomString): void {
    throw new Error("Method not implemented.");
  }

  public replaceData(offset: number, count: number, data: DomString): void {
    throw new Error("Method not implemented.");
  }

  public splitText(offset: number): DomText {
    throw new Error("Method not implemented.");
  }

  public substringData(offset: number, count: number): DomString {
    throw new Error("Method not implemented.");
  }
}
