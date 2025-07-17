import { isFunction } from "@positron/lang-core";

import type { ReactComponent } from "./react-component";

/**
 * @param maybeReactComponent
 *
 * @public
 */
export function isReactComponent(
  maybeReactComponent: unknown,
): maybeReactComponent is ReactComponent {
  return isFunction(maybeReactComponent);
}
