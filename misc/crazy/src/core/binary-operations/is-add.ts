import { Add } from "./add";

/**
 * @param maybeAdd
 *
 * @public
 */
export function isAdd(maybeAdd: unknown): maybeAdd is Add {
  return maybeAdd instanceof Add;
}
