import type { SpecEntity } from "./spec-entity";

/**
 *
 */
export interface SpecChild<TParent extends SpecEntity> {
  readonly parent: TParent;
}
