import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isNumber} type-guard function determines whether the type of the
 * passed value `maybeNumber` extends the `number` type.
 *
 * @example
 * ```ts
 * import { isNumber } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOr1: string | 1;
 *
 * if (isNumber(stringOr1)) {
 *   expect<number>(stringOr1);
 *   expect<1>(stringOr1);
 *   // OK
 *
 *   // @ts-expect-error Argument of type '1' is not assignable
 *   expect<2>(stringOr1);
 * }
 * ```
 *
 * @param maybeNumber - The value to be tested for being a `number`.
 *
 * @returns The boolean value `true` if the type of the given `maybeNumber`
 *   extends the `number` type. Otherwise, `false`.
 *
 * @public
 */
export function isNumber(maybeNumber: unknown): maybeNumber is number {
  return typeOf(maybeNumber) === Type.Number;
}
