/**
 * @public
 */
export type FbCallbackName<TType extends string> = `on_${TType}`;

/**
 * @param eventName - Event type
 *
 * @public
 */
export function fbEventCallbackName<TName extends string>(
  eventName: TName,
): FbCallbackName<TName> {
  return `on_${eventName}`;
}
