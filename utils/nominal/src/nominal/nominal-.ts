import { NominalSymbols } from "@positron/nominal-symbols";

import type { NominalType } from "../nominal-type";

/**
 */
export type Nominal<
  TTarget,
  TTypes extends NominalType[] = [],
> = Nominal_<TTypes> & TTarget;

/**
 * @intrnal
 *
 * @internal
 */
export declare class Nominal_<TTypes extends NominalType[]> {
  private readonly [NominalSymbols.type]: [
    NominalType,
    ...TTypes,
    ...NominalType[],
  ];
}
