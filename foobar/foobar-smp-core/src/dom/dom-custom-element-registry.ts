import type { DomCustomElementConstructor } from "./dom-custom-element-constructor";
import type { DomElementDefinitionOptions } from "./dom-element-definition-options";
import type { DomNode } from "./dom-node";
import type { DomString } from "./dom-string";

export interface DomCustomElementRegistry {
  define(
    name: DomString,
    constructor: DomCustomElementConstructor,
    options?: DomElementDefinitionOptions,
  ): void;

  get(name: DomString): DomCustomElementConstructor | undefined;

  getName(constructor: DomCustomElementConstructor): DomString | null;

  initialize(root: DomNode): void;

  upgrade(root: DomNode): void;

  whenDefined(name: DomString): Promise<DomCustomElementConstructor>;
}
