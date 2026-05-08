/**
 * The {@link clearTimeout} function cancels a timeout previously
 * established by calling {@link setTimeout}. If the parameter
 * provided does not identify a previously established action, this does
 * nothing.
 *
 * @param timeoutID - The identifier of the timeout you want to cancel. This
 *   ID was returned by the corresponding call to
 *   {@link setInterval}.
 *
 * @public
 */
export declare function clearTimeout(timeoutID: number): void;
