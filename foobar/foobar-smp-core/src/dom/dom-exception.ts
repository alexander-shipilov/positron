import type { DomString } from "./dom-string";

export interface DomException {
  readonly message: DomString;
  readonly name: DomString;
}
