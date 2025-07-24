import { MetaSymbols } from "@positron/meta-symbols";

import type { MetaData } from "../meta-data";

/**
 * @internal
 */
export type MetaType<TTarget, TData extends MetaData> = MetaType_<TData> &
  TTarget;

/**
 * @intrnal
 */
export declare class MetaType_<TData extends MetaData> {
  private readonly [MetaSymbols.meta]: TData;
}
