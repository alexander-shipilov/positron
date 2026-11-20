import type { Callable } from "../callable";

import type { Call } from "./call";
import type { ObjectSignature } from "./object-signature";
import type { Param } from "./param";
import type { Signature } from "./signature";

export type CallSignature<TTarget> = TTarget extends Callable
  ? ObjectSignature<TTarget> & {
      readonly [Signature.call]: Call<Param[]> | Call<Param[]>[];
    }
  : ObjectSignature<TTarget>;
