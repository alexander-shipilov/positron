import type { Any } from "../any/any";

/**
 * The {@link TagFunction} type represents a template literal tag function.
 *
 * @example
 * ```ts
 * import type { TagFunction } from "@positron/lang";
 *
 * declare const tag: TagFunction<number[]>;
 *
 * console.log(tag`foo${0}bar${1}`);
 * ```
 *
 * @typeParam TValues - The tuple of interpolated value types.
 *
 * @public
 */
export type TagFunction<TValues extends Any[] = never[]> = (
  parts: TemplateStringsArray,
  ...values: TValues
) => string;
