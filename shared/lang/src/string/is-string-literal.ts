import type { IsAnyLike } from "../any/is-any-like";
import type { IsIndexerKey } from "../key/is-indexer-key";
import type { ExtractOne } from "../utility/extract-one";

/**
 * The {@link IsStringLiteral} type constructs a boolean literal which equals
 * `true` if the passed `TValue` is a literal string. This means that `TValue`
 * is a string of finite length.
 *
 * @example
 * ```ts
 * import type { IsStringLiteral } from "@positron/lang";
 *
 * type T1 = IsStringLiteral<"foo">;
 * // true
 *
 * type T2 = IsStringLiteral<"bar" | "foo">;
 * // true
 *
 * type T3 = IsStringLiteral<string>;
 * // false
 *
 * type T4 = IsStringLiteral<Uppercase<string>>;
 * // false
 *
 * type T5 = IsStringLiteral<`foo${string}`>;
 * // false
 *
 * type T6 = IsStringLiteral<`foo${number}`>;
 * // false
 *
 * type T7 = IsStringLiteral<"foo" | `foo${number}`>;
 * // false
 * ```
 *
 * @typeParam TValue - The string type to check.
 *
 * @public
 */
export type IsStringLiteral<TValue extends string> =
  IsAnyLike<TValue> extends true
    ? false
    : // In most cases string indexer is a string of infinite length. This can
      // be used to check if `TValue` is a literal.
      IsIndexerKey<TValue> extends true
      ? false
      : // However, `Record<"foo" | `foo${number}`, never>` does not create an
        // index signature, so it is necessary to split the union into separate
        // types and check each one individually.
        ExtractOne<TValue> extends infer One extends TValue
        ? [TValue] extends [One]
          ? // Stop iteration if `TValue` is not a union.
            true
          : IsStringLiteral<One> extends true
            ? IsStringLiteral<Exclude<TValue, One>>
            : false
        : true;
