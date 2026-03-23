import { NOMINAL_SYMBOL } from "@positron/nominal-symbol";

import type { NominalType } from "../nominal-type";

/**
 * @public
 */
export declare class NominalClass_<TTypes extends NominalType[]> {
  protected readonly [NOMINAL_SYMBOL]: [
    NominalType,
    ...TTypes,
    ...NominalType[],
  ];
}
