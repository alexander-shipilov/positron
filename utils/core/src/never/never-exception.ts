import { Exception } from "../exception";

/**
 * The {@link NeverException} class represents an error which is thrown by the
 * {@link never} function.
 *
 * @public
 */
export class NeverException extends Exception<typeof NeverException.NAME> {
  static readonly NAME = "NeverException";

  constructor(message?: string) {
    super(NeverException.NAME, message);
  }
}
