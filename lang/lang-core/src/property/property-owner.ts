import type { IsNever } from "expect-type";

import type { EmptyObject } from "../object";

/**
 * Type {@link PropertyOwner} constructs a type with the property `TKey`
 *
 * @example
 * ```ts
 *  type FooOwner = PropertyOwner<'foo', number>
 *  // { foo: number }
 *
 *  type TedOwner = PropertyOwner<'ted', number | undefined>
 *  // { ted?: number | undefined }
 * ```
 *
 * @public
 */
export type PropertyOwner<
  TKey extends PropertyKey,
  TValue = unknown,
> = undefined extends TValue
  ? Partial<Record<TKey, TValue>>
  : true extends IsNever<TKey> | IsNever<TValue>
    ? EmptyObject
    : Record<TKey, TValue>;
