/**
 * The {@link Optional} type adds `undefined` to the passed `TType`
 *
 * @example
 * ```ts
 *  import type { Optional } from "@positron/lang";
 *
 *  type OptionalString = Optional<string>
 *  // string | undefined
 * ```
 *
 * @public
 */
export type Optional<TType> = TType | undefined;
