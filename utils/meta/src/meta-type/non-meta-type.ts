import type { MetaData } from "../meta-data";

import type { MetaType } from "./meta-type-";

/**
 * The {@link NonMetaType} excludes metadata from the passed type `TType`.
 *
 * @typeParam TType - The type to exclude metadata.
 *
 * @public
 */
export type NonMetaType<TType> =
  TType extends MetaType<infer Type, MetaData> ? Type : TType;
