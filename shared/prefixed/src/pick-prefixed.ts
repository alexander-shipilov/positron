import type { KeyOf } from "@positron/lang";

import type { Prefix } from "./prefix";
import type { PrefixedKey } from "./prefixed-key";

/**
 * The {@link PickPrefixed} type creates a type by selecting properties from
 * `TTarget` whose names begin with the specified prefix `TPrefix` and then
 * removing that prefix from their names.
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, bar: unknown }
 *
 *  type FooPrefixedProps = PickPrefixed<"foo", Props>
 *  // { bar: unknown }
 * ```
 *
 * @typeParam TPrefix - The prefix.
 * @typeParam TTarget - The type to pick the prefixed props from.
 *
 * @public
 */
export type PickPrefixed<TPrefix extends Prefix, TTarget extends object> = {
  [
    Key in KeyOf<TTarget, string> as Key extends PrefixedKey<
      TPrefix,
      infer Unprefixed
    >
      ? Unprefixed
      : never
  ]: TTarget[Key];
};
