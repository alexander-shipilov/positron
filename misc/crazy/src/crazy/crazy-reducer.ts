import type { CrazyEntity } from "./crazy-entity";

export interface CrazyReducer {
  reduce(entity: CrazyEntity): CrazyEntity;
}
