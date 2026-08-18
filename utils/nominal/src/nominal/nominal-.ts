import type { NominalType } from "../nominal-type";

import type { NominalClass_ } from "./nominal-class-";

/**
 * @public
 */
export type Nominal_<
  TTarget,
  TTypes extends NominalType[] = [],
> = NominalClass_<TTypes> & TTarget;
