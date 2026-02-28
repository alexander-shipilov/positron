import { NOMINAL_SYMBOL } from "@positron/nominal-symbol";

import type { NominalType } from "../nominal-type";

/**
 * @public
 */
export declare class NominalClass<TTypes extends NominalType[]> {
  private readonly [NOMINAL_SYMBOL]: [NominalType, ...TTypes, ...NominalType[]];
}
