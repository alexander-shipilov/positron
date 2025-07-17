import type { PropertyIndex } from "./property-index";
import type { PropertyName } from "./property-name";
import type { PropertySymbol } from "./property-symbol";

/**
 * The {@link LiteralPropertyKey} type excludes index keys from the passed
 * `TKey`
 *
 * ```ts
 * type Foo = LiteralPropertyKey<keyof ArrayLike>
 * // "length"
 * ```
 *
 * @public
 */
export type LiteralPropertyKey<TKey extends PropertyKey> =
  PropertyName extends TKey
    ? LiteralPropertyKey<Exclude<TKey, PropertyName>>
    : PropertySymbol extends TKey
      ? LiteralPropertyKey<Exclude<TKey, PropertySymbol>>
      : PropertyIndex extends TKey
        ? Exclude<TKey, PropertyIndex>
        : TKey;
