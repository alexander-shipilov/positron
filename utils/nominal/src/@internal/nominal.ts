import type { NominalType } from "./nominal-type";
import type { NominalClass } from "./nominal.class";

/**
 * The {@link Nominal} class contains nominal types information.
 *
 * @internal
 */
export type Nominal<
  TTarget = unknown,
  TTypes extends NominalType[] = [],
> = NominalClass<TTarget, TTypes> & TTarget;
