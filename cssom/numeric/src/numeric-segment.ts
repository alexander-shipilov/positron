/**
 * @public
 */
export abstract class NumericSegment<TImpl> {
  protected readonly impl: TImpl;

  public constructor(impl: TImpl) {
    this.impl = impl;
  }
}
