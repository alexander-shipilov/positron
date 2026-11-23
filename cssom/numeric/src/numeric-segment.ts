/**
 * @public
 */
export abstract class NumericSegment<TImpl> {
  protected readonly impl: TImpl;

  protected constructor(impl: TImpl) {
    this.impl = impl;
  }
}
