import type { CrazyEntity, CrazyReducer } from "../crazy";

export class IdentityReducer implements CrazyReducer {
  reduce(entity: CrazyEntity): CrazyEntity {
    return entity;
  }
}
