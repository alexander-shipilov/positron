export interface ClassFactory<TImpl, TInstance> {
  (impl: TImpl): new () => TInstance;
}
