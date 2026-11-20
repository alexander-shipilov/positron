import type { Any, IsIndexerKey, KeyOf } from "@positron/lang";

import type { Callable } from "../callable";
import type { Identifier } from "../identifier";

import type { Entity } from "./entity";
import type { EntityObject } from "./entity-object";
import type { EntityType } from "./entity-type";
import type { Named } from "./named";

/**
 * Obtain the parameters of a function type in a tuple
 */
type P<T> = T extends (...args: infer A) => Any ? A : never;

export interface Interface<TTarget = never>
  extends EntityObject<EntityType.Interface>, Named<Identifier> {
  method<TKey extends KeyOf<Methods<TTarget>>>(key: TKey): TKey;
}

abstract class XX<TTarget = never> implements Interface<TTarget> {
  public abstract readonly entityType: EntityType.Interface;

  public abstract readonly name: Identifier;

  public abstract readonly parent: Entity | null;

  public abstract method<TKey extends KeyOf<Methods<TTarget>>>(key: TKey): TKey;
}

export interface X {
  [n: number]: string;
  foo?(n: 1): void;
}

export type MethodKey<TTarget, TKey extends KeyOf<TTarget>> =
  IsIndexerKey<TKey> extends true
    ? never
    : TTarget[TKey] extends Callable
      ? TKey
      : never;

export type Methods<TTarget> = {
  [Key in KeyOf<TTarget> as MethodKey<TTarget, Key>]: TTarget[Key];
};
