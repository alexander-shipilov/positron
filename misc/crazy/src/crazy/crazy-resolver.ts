import type { CrazyEntity } from "./crazy-entity";

export interface CrazyResolver<TResult> {
  resolve(entity: CrazyEntity): TResult;
}
