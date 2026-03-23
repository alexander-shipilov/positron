import { Div } from "./div";

/**
 * @param maybeDiv
 *
 * @public
 */
export function isDiv(maybeDiv: unknown): maybeDiv is Div {
  return maybeDiv instanceof Div;
}
