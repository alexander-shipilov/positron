/**
 * The {@link IsNever} type constructs a type which equals to the `true`
 * literal if the passed `TType` is `never` type and `false` otherwise.
 *
 * @typeParam TType - The type to check.
 *
 * @public
 */
export type IsNever<TType> = [TType] extends [never] ? true : false;
