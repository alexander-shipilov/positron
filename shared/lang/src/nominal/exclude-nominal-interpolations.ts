import type { IsAnyLike } from "../any/is-any-like";
import type { StringLike } from "../string/string-like";

import type { Nominal } from "./nominal";

/**
 * The {@link ExcludeNominalInterpolations} type excludes nominal
 * meta-information from a given string type `TString` and all interpolations.
 *
 * @example
 * ```ts
 * import type {
 *   ExcludeNominalInterpolations,
 *   Nominal,
 * } from "@positron/lang";
 *
 * type T1 = ExcludeNominalInterpolations<Nominal<string>>;
 * // string
 *
 * type T2 = ExcludeNominalInterpolations<`foo${Nominal<string>}`>;
 * // `foo${string}`
 * ```
 *
 * @typeParam TString - The string type to exclude nominal metadata from.
 *
 * @public
 */
export type ExcludeNominalInterpolations<TString extends string> =
  IsAnyLike<TString> extends true
    ? TString
    : TString extends Nominal<infer Inner extends string>
      ? ExcludeNominalInterpolations<Inner>
      : string extends TString
        ? string
        : TString extends `${infer First}${infer Tail}`
          ? `${First extends `${Nominal<infer Inner extends StringLike>}`
              ? Inner extends string
                ? ExcludeNominalInterpolations<Inner>
                : Inner
              : First}${ExcludeNominalInterpolations<Tail>}`
          : "";
