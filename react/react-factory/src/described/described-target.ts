/**
 * The {@link DescribedTarget} type represents a value that can be described by
 * {@link Descriptor}.
 *
 * @public
 */
export type DescribedTarget<TValue = unknown, TProps = never> =
  | TValue
  | ((props: TProps) => TValue);
