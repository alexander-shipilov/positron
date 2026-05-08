/**
 * @public
 */
export interface Console {
  /**
   * The {@link Console.log} method outputs a message to the console.
   *
   * @param args - A list of JavaScript values to output. A representation of
   *   each of these values is output to the console in the order given with
   *   some type of separation between each of them.
   */
  log(...args: unknown[]): void;
}
