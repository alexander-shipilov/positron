/**
 * The {@link TreeException} interface represents an abnormal event (called an
 * exception) that occurs as a result of calling a method or accessing a
 * property of a tree API.
 *
 * Each exception has a {@link name}, which is a short "PascalCase"-style string
 * identifying the error or abnormal condition.
 */
export class TreeException extends Error {
  public constructor(
    message: string = "",
    public readonly name: string = "Error",
  ) {
    super(message);
  }
}
