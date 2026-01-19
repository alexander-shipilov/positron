import type { CrazyEntity, CrazyReducer } from "../crazy";

export class CompositeReducer implements CrazyReducer {
  constructor(protected readonly reducers: [CrazyReducer, ...CrazyReducer[]]) {}

  reduce(entity: CrazyEntity): CrazyEntity {
    return this.reducers.reduce(
      (nextEntity: CrazyEntity, reducer: CrazyReducer) =>
        reducer.reduce(nextEntity),
      entity,
    );
  }
}
