import type { IsIndexerKey, KeyOf } from "@positron/lang";

import type { Callable } from "../callable";

import type { Indexer } from "./indexer";
import type { Method } from "./method";
import type { Param } from "./param";
import type { Property } from "./property";
import type { SignatureKey } from "./signature-key";

export type KeyedSignature<TTarget, TKey extends KeyOf<TTarget>> =
  IsIndexerKey<TKey> extends true
    ? Indexer
    : TKey extends SignatureKey
      ? TTarget[TKey] extends Callable
        ? | Method<TKey, readonly Param[]>
          | Method<TKey, readonly Param[]>[]
          | Property<TKey>
        : Property<TKey>
      : never;
