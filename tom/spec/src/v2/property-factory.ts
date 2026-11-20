import type { Property } from "./property";
import type { SignatureKeyOf } from "./signature-key-of";

export interface PropertyFactory<
  TTarget,
  TKey extends SignatureKeyOf<TTarget>,
> {
  (): Property<TKey>;
}
