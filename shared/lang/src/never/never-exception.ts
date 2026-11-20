import { Exception } from "../exception/exception";

/**
 * The {@link NEVER_EXCEPTION} constant represents the name of the
 * {@link NeverException}.
 *
 * @public
 */
export const NEVER_EXCEPTION = "NeverException";

/**
 * The {@link NeverException} class represents an error which is thrown by the
 * {@link never} function.
 *
 * @public
 */
export class NeverException extends Exception<typeof NEVER_EXCEPTION> {
  public constructor(message?: string) {
    super(NEVER_EXCEPTION, message);
  }
}
