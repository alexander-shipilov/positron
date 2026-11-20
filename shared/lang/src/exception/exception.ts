/**
 * The {@link Exception} class represents an abnormal event that occurs as a
 * result of calling a method or accessing a property.
 *
 * @remarks
 *   Each exception has a {@link Exception.name}, which is a short
 *   "PascalCase"-style string identifying the error or abnormal condition.
 *
 * @public
 */
export class Exception<TName extends string> extends Error {
  /**
   * The {@link Exception.name} read-only property represents a string that
   * contains one of the strings associated with an error name.
   */
  public readonly name: TName;

  /**
   * @param name - The exception name
   *
   * @param message - The exception message
   */
  public constructor(name: TName, message?: string) {
    super(message);

    this.name = name;
  }
}
