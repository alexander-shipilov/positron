import type { Any } from "../any/any";

/**
 * The {@link TagFunction} type represents a tag function.
 *
 * @example
 * ```ts
 *  declare const tag: TagFunction<number[]>;
 *
 *  console.log(tag`foo${0}bar${1}`);
 * ```
 *
 * @public
 */
export type TagFunction<TValues extends Any[] = never[]> = (
  parts: TemplateStringsArray,
  ...values: TValues
) => string;
