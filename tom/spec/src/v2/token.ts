import type { Multiplicity } from "./multiplicity";

export interface Token<TMultiplicity extends Multiplicity> {
  multiplicity: TMultiplicity;
}
