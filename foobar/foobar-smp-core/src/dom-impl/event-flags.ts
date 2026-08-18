export enum EventFlags {
  StopPropagation = 1,
  StopImmediatePropagation = 2,
  Canceled = 4,
  InPassiveListener = 8,
  Composed = 16,
  Initialized = 32,
  Dispatch = 64,
}
