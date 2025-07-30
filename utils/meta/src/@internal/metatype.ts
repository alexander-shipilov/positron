import { MetaSymbols } from "@positron/meta-symbols";

import type { Metadata } from "../metadata";

/**
 * @internal
 */
export type Metatype<TTarget, TData extends Metadata> = Metatype_<TData> &
  TTarget;

/**
 * @internal
 */
declare class Metatype_<TData extends Metadata> {
  private readonly [MetaSymbols.meta]: TData;
}
