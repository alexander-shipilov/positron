import { MetatypeSymbol } from "@positron/metatype-symbol";

import type { Metadata } from "../metadata";

/**
 * @internal
 */
export type MetatypeMetadata<TData extends Metadata> = Metatype<TData>;

/**
 * @intrnal
 */
declare class Metatype<TData extends Metadata> {
  private readonly [MetatypeSymbol]: TData;
}
