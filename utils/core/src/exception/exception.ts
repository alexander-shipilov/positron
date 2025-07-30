/**
 * The {@link Exception} class represents an abnormal event (called an
 * exception) that occurs as a result of calling a method or accessing a
 * property.
 *
 * Each exception has a {@link Exception.name}, which is a short
 * "PascalCase"-style string identifying the error or abnormal condition.
 *
 * @public
 */
export class Exception<TName extends string> extends Error {
  readonly #name: TName;

  /**
   * The {@link name} read-only property of the {@link Exception} interface
   * returns a string that contains one of the strings associated with an error
   * name.
   */
  public get name() {
    return this.#name;
  }

  /**
   * @param name - The exception name
   * @param message - The exception message
   */
  constructor(name: TName, message?: string) {
    super(message);
    this.#name = name;
  }
}
