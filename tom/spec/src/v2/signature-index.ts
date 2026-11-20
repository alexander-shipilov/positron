import type { SignatureIndexNumber } from "./signature-index-number";
import type { SignatureIndexString } from "./signature-index-string";
import type { SignatureIndexSymbol } from "./signature-index-symbol";

export type SignatureIndex =
  | SignatureIndexNumber //
  | SignatureIndexString
  | SignatureIndexSymbol;
