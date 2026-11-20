import type { Entity } from "./entity";
import type { SignatureKey } from "./signature-key";

export interface SignatureIndexer {
  [key: SignatureKey]: Entity | Entity[];
}
