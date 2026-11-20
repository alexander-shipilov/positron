import { isFunction } from "@positron/lang";

import type { ReactComponent } from "./react-component";

/**
 * @param maybeReactComponent - TBD
 *
 * @public
 */
export function isReactComponent(
  maybeReactComponent: unknown,
): maybeReactComponent is ReactComponent {
  return isFunction(maybeReactComponent);
}
