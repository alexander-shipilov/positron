import { Exception } from "../exception";

/**
 * The {@link NEVER_EXCEPTION} constant represents a name of the
 * {@link NeverException}
 */
export const NEVER_EXCEPTION = "NeverException";

/**
 * The {@link NeverException} class represents an error which is thrown by the
 * {@link never} function.
 *
 * @public
 */
export class NeverException extends Exception<typeof NEVER_EXCEPTION> {
  constructor(message?: string) {
    super(NEVER_EXCEPTION, message);
  }
}
