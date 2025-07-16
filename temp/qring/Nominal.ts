declare const $tag: unique symbol;

declare class TagOwner<Tag> {
  private [$tag]: Tag;
}

/**
 * Type {@link Nominal} type creates nominal type from passed type `Type`
 * ```
 *  type Integer = Nominal<number, "integer">
 * ```
 *
 * @typeParam Type - The type to make nominal type from
 * @typeParam Tag - Tag name
 */
export type Nominal<Type, Tag extends string> = Type & TagOwner<Tag>;
