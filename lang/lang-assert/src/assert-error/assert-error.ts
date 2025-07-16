import { NeverError } from "@positron/lang-core";

/**
 * The {@link AssertError} class represents an error which is thrown by the
 * {@link assert} function.
 *
 * @public
 */
export class AssertError extends NeverError {}

/**
 * The {@link ASSERT_ERROR} constant represents a default error which
 * the {@link assert} function throws.
 *
 * @public
 */
export const ASSERT_ERROR = new AssertError("Assertion failed");
