/**
 * The `Example` interface
 */
export interface Example {
  /**
   * Index key
   */
  [i: number]: string;

  /**
   * The `bar` method converts the passed number to a string
   *
   * @param arg - Number value
   */
  bar(arg: number): string;

  /**
   * The `foo` method returns "foo"
   */
  foo(): string;
}
