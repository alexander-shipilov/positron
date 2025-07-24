import { NominalSymbols } from "@positron/nominal-symbols";

import type { NominalType } from "../nominal-type";

/**
 * @internal
 */
export type Nominal<
  TTarget,
  TTypes extends NominalType[] = [],
> = Nominal_<TTypes> & TTarget;

/**
 * @intrnal
 */
export declare class Nominal_<TTypes extends NominalType[]> {
  private readonly [NominalSymbols.type]: [
    NominalType,
    ...TTypes,
    ...NominalType[],
  ];
}
