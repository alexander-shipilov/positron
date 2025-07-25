import { MetaSymbols } from "@positron/meta-symbols";

import type { MetaData } from "../meta-data";

/**
 */
export type MetaType<TTarget, TData extends MetaData> = MetaType_<TData> &
  TTarget;

/**
 * @intrnal
 *
 * @internal
 */
export declare class MetaType_<TData extends MetaData> {
  private readonly [MetaSymbols.meta]: TData;
}
