import { Exception } from "../exception";

/**
 * The {@link ASSERT_EXCEPTION} constant represents a name of the
 * {@link AssertException}
 *
 * @public
 */
export const ASSERT_EXCEPTION = "AssertException";

/**
 * The {@link AssertException} class represents an error which is thrown by the
 * {@link assert} function.
 *
 * @public
 */
export class AssertException extends Exception<typeof ASSERT_EXCEPTION> {
  constructor(message?: string) {
    super(ASSERT_EXCEPTION, message);
  }
}
