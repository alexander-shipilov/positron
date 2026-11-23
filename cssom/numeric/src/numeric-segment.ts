/**
 * The {@link NumericSegment} abstract class serves as a base class for modular
 * implementation segments that operate against a shared registry or facade.
 *
 * @typeParam TImpl - The implementation contract type accessed by the segment.
 *
 * @public
 */
export abstract class NumericSegment<TImpl> {
  /**
   * The {@link NumericSegment.impl} read-only property holds the underlying
   * implementation instance.
   */
  protected readonly impl: TImpl;

  /**
   * The {@link NumericSegment} constructor initializes the segment with the
   * provided implementation instance.
   *
   * @param impl - The implementation instance to bind.
   */
  public constructor(impl: TImpl) {
    this.impl = impl;
  }
}
