import { MetaTypeSymbol } from "@positron/meta-type-symbol";

import type { MetaData } from "./meta-data";

/**
 * @internal
 */
export type MetaTypeMetadata<TData extends MetaData> = MetaType<TData>;

/**
 * @intrnal
 */
declare class MetaType<TData extends MetaData> {
  private readonly [MetaTypeSymbol]: TData;
}
