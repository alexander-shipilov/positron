import type { Multiplicity } from "./multiplicity";
import type { Named } from "./named";
import type { SignatureKey } from "./signature-key";
import type { Token } from "./token";

export interface NamedToken<
  TName extends SignatureKey,
  TMultiplicity extends Multiplicity = Multiplicity,
>
  extends Named<TName>, Token<TMultiplicity> {}
