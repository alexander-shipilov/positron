import { never } from "@positron/core";

/**
 * The {@link ReactNever} component throws exception while be rendered.
 */
export function ReactNever(): never {
  return never("Cannot render `ReactNever` component");
}
