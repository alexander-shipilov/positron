/**
 * The {@link Optional} type adds `undefined` to the passed `TType`
 *
 * @example
 * ```ts
 *  type OptionalString = Optional<string>
 *  // string | undefined
 * ```
 *
 * @public
 */
export type Optional<TType> = TType extends undefined
  ? TType
  : TType | undefined;
