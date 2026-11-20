import type { KeyOf } from "@positron/lang";

import type { SpecKey } from "./spec-key";

/**
 * Type {@link SpecKeyOf} describes a key of the passed `TTarget`.
 *
 * @public
 */
export type SpecKeyOf<
  TType,
  TKey extends KeyOf<TType> = KeyOf<TType>,
> = string extends TKey
  ? typeof SpecKey.String
  : symbol extends TKey
    ? typeof SpecKey.Symbol
    : number extends TKey
      ? typeof SpecKey.Number
      : TKey;
