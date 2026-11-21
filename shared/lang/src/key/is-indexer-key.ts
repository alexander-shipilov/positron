import type { IsNever } from "../never/is-never";
import type { EmptyObject } from "../object/empty-object";

/**
 * The {@link IsIndexerKey} type constructs a boolean literal which equals
 * `true` if the passed `TKey`, when used as a key, produces an index
 * signature.
 *
 * @typeParam TKey - The property key type to check.
 *
 * @public
 */
export type IsIndexerKey<TKey extends PropertyKey> =
  IsNever<TKey> extends true
    ? false
    : EmptyObject extends Record<TKey, never>
      ? true
      : false;
