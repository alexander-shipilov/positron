import type { SpecName } from "./spec-name";

/**
 *
 * @public
 */
export interface SpecNamed<TName extends SpecName = SpecName> {
  readonly name: TName;
}
