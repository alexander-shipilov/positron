import type { NominalType } from "../nominal-type";

import type { NominalClass } from "./nominal-class-";

/**
 * @public
 */
export type Nominal_<
  TTarget,
  TTypes extends NominalType[] = [],
> = NominalClass<TTypes> & TTarget;
