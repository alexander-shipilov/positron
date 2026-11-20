import type { NewSignature } from "./new-signature";

export type InterfaceSignature<TTarget> = NewSignature<TTarget> & {
  // readonly [Signature.this]: Interface;
};
