import type { Instantiable } from "../instantiable";

import type { CallSignature } from "./call-signature";
import type { New } from "./new";
import type { Param } from "./param";
import type { Signature } from "./signature";

export type NewSignature<TTarget> = TTarget extends Instantiable
  ? CallSignature<TTarget> & {
      readonly [Signature.new]: New<Param[]> | New<Param[]>[];
    }
  : CallSignature<TTarget>;
