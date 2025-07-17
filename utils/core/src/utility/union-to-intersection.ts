/**
 * The {@link UnionToIntersection} converts a union type `TUnion` to an
 * intersection type.
 *
 * @typeParam TUnion - The union to convert
 *
 * @public
 */
export type UnionToIntersection<TUnion> = (
  TUnion extends unknown ? (union: TUnion) => void : never
) extends (intersection: infer Intersection) => void
  ? Intersection
  : never;
