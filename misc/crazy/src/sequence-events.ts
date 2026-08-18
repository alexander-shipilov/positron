import type { Entity } from "./entity";
import type { ExceptionType } from "./exception";

export type SequenceEvents<TValue> = {
  complete: [number, number];
  progress: [number, number];
  reject: [Entity, ExceptionType];
  resolve: [Entity, TValue];
};
