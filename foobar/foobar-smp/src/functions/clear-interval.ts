/**
 * The {@link clearInterval} function cancels a timed, repeating
 * action which was previously established by a call to
 * {@link setInterval}. If the parameter provided does not
 * identify a previously established action, this does nothing.
 *
 * @param intervalID - The identifier of the repeated action you want to
 *   cancel. This ID was returned by the corresponding call to
 *   {@link setInterval}.
 *
 * @public
 */
export declare function clearInterval(intervalID: number): void;
