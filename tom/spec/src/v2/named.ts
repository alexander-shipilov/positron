import type { SignatureKey } from "./signature-key";

export interface Named<TName extends SignatureKey> {
  readonly name: TName;
}
