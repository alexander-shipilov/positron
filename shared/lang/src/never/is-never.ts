/**
 * The {@link IsNever} type constructs a boolean literal which equals to
 * the `true` if the passed `TType` is `never` type and `false`
 * otherwise.
 *
 * @typeParam TType - The type to check.
 *
 * @public
 */
export type IsNever<TType> = [TType] extends [never] ? true : false;
