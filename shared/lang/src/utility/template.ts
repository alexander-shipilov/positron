import type { StringLike } from "../string/string-like";
import { toString } from "../string/to-string";

import type { TemplateFunction } from "./template-function";

/**
 * The {@link template} function creates a function to format template string
 * with the passed arguments.
 *
 * @example
 * ```ts
 *  const message = template`${0}, ${1} world!`
 *
 *  message('Hello', 'brave new')
 *  // Hello, brave new world!
 *
 *  message('Goodbye', 'cruel')
 *  // Goodbye, cruel world!
 * ```
 *
 * @param parts - String parts
 *
 * @param indexes - Arguments indexes
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
