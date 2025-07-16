import type { PropertyIndex } from "./property-index";
import type { PropertyName } from "./property-name";
import type { PropertySymbol } from "./property-symbol";

/**
 * The {@link LiteralKey} type excludes index keys from the passed `TKey`
 *
 * ```ts
 * type Foo = LiteralKey<keyof ArrayLike>
 * // "length"
 * ```
 *
 * @public
 */
export type LiteralKey<TKey extends PropertyKey> = PropertyName extends TKey
  ? LiteralKey<Exclude<TKey, PropertyName>>
  : PropertySymbol extends TKey
    ? LiteralKey<Exclude<TKey, PropertySymbol>>
    : PropertyIndex extends TKey
      ? Exclude<TKey, PropertyIndex>
      : TKey;
