import type { StringLike } from "../string/string-like";
import { toString } from "../string/to-string";

import type { TemplateFunction } from "./template-function";

/**
 * The {@link template} function creates a function to format a template string
 * with the passed arguments.
 *
 * @example
 * ```ts
 * import { template } from "@positron/lang";
 *
 * const message = template`${0}, ${1} world!`;
 *
 * console.log(message("Hello", "brave new"));
 * // >> "Hello, brave new world!"
 *
 * console.log(message("Goodbye", "cruel"));
 * // >> "Goodbye, cruel world!"
 * ```
 *
 * @param parts - String parts.
 *
 * @param indexes - Argument indexes.
 *
 * @returns A template formatting function.
 *
 * @public
 */
export function template(
  parts: TemplateStringsArray,
  ...indexes: readonly number[]
): TemplateFunction {
  const { length } = indexes;

  return (...args: StringLike[]): string =>
    parts.reduce(
      (acc, part, index) =>
        acc + part + (index < length ? toString(args[indexes[index]]) : ""),
      "",
    );
}
