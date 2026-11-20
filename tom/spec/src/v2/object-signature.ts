import type { IsAny, IsIndexerKey, KeyOf } from "@positron/lang";

import type { KeyedSignature } from "./keyed-signature";
import type { SignatureIndex } from "./signature-index";
import type { SignatureIndexNumber } from "./signature-index-number";
import type { SignatureIndexString } from "./signature-index-string";
import type { SignatureIndexSymbol } from "./signature-index-symbol";
import type { SignatureIndexer } from "./signature-indexer";

export type ObjectSignature<TTarget> = SignatureIndexer & {
  [Key in KeyOf<TTarget> as ObjectSignatureKey<Key>]: KeyedSignature<
    TTarget,
    Key
  >;
};

export type ObjectSignatureKey<TKey extends PropertyKey> =
  IsAny<TKey> extends true
    ? SignatureIndex
    : IsIndexerKey<number & TKey> extends true
      ? SignatureIndexNumber
      : IsIndexerKey<string & TKey> extends true
        ? SignatureIndexString
        : IsIndexerKey<symbol & TKey> extends true
          ? SignatureIndexSymbol
          : TKey;
