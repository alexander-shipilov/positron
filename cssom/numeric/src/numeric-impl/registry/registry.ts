/**
 * @public
 */
export interface Registry<TOwner, TValue> {
  get(owner: TOwner, creator: () => TValue): TValue;

  has(owner: TOwner): boolean;
}
