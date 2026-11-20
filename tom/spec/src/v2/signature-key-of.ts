import type { KeyOf } from "@positron/lang";

import type { SignatureKey } from "./signature-key";

export type SignatureKeyOf<
  TTarget,
  TKey extends SignatureKey = SignatureKey,
> = KeyOf<TTarget, TKey>;
