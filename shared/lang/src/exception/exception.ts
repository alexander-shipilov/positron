/**
 * The {@link Exception} class represents an abnormal event that occurs as a
 * result of calling a method or accessing a property.
 *
 * @remarks
 *   Each exception has a {@link Exception.name}, which is a short
 *   `PascalCase`-style string identifying the error or abnormal condition.
 *
 * @typeParam TName - The literal string name of the exception.
 *
 * @public
 */
export class Exception<TName extends string> extends Error {
  /**
   * The {@link Exception.name} read-only property represents a string that
   * contains one of the strings associated with an error name.
   */
  public override readonly name: TName;

  /**
   * The {@link Exception} constructor initializes a new exception instance
   * with the given `name` and optional `message`.
   *
   * @param name - The exception name.
   *
   * @param message - The exception message.
   */
  public constructor(name: TName, message?: string) {
    super(message);

    this.name = name;
  }
}
