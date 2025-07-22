import type { ArrayReverse } from "@positron/array";

import type { NominalType } from "./nominal-type";

/**
 * @internal
 */
export type NominalClass<TTarget, TTypes extends NominalType[]> = Nominal<
  TTarget,
  TTypes
>;

/**
 * The {@link tag} constant represents a property key to store nominal
 * types information.
 *
 * @internal
 */
declare const tag: unique symbol;

/**
 * The {@link Nominal} class contains nominal types information.
 *
 * @internal
 */
declare class Nominal<TTarget, TTypes extends NominalType[]> {
  private readonly [tag]: [
    TTarget,
    NominalType,
    ...ArrayReverse<TTypes>,
    ...NominalType[],
  ];
}
