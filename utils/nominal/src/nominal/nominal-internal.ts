import type { Metatype } from "utils/metatype/src/non-metatype";

import type { NominalSymbol } from "@positron/nominal-symbol/src";

import type { NominalType } from "../nominal-type";

export type NominalInternal<
  TTarget = unknown,
  TTypes extends NominalType[] = [],
> = Nominal<TTarget, TTypes>;

/**
 * The {@link Nominal} class contains nominal types information.
 *
 * @internal
 */
type Nominal<TTarget = unknown, TTypes extends NominalType[] = []> = Metatype<
  TTarget,
  NominalSymbol,
  [...NominalType[], ...TTypes, NominalType]
>;
