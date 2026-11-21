import type { Any } from "../any/any";
import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link Intersection} type constructs an intersection of types contained
 * within a given union type `TUnion`.
 *
 * @remarks
 *   The main idea is that a function acting as a supertype for
 *   `((a: A) => void) | ((a: B) => void)` must be able to accept both type
 *   `A` and type `B`. And therefore, its argument is the intersection of types
 *   `A` and `B`.
 *
 * @example
 * ```ts
 *  import type { Intersection } from "@positron/lang";
 *
 *  type T1 = Intersection<number>
 *  // number
 *
 *  type T2 = Intersection<number | string>
 *  // never
 *
 *  type T3 = Intersection<(() => number) | (() => string)>
 *  // (() => number) & (() => string)
 * ```
 *
 * @public
 */
export type Intersection<TUnion> =
  IsAnyLike<TUnion> extends true
    ? TUnion
    : // Convert A | B | ... to ((a: A) => void) | ((a: B) => void) | ...
      (TUnion extends Any ? (a: TUnion) => void : never) extends (
          b: infer Intersection,
        ) => void
      ? Intersection
      : never;
