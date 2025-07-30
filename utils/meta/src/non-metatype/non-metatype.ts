import type { Metatype } from "../@internal";
import type { Metadata } from "../metadata";

/**
 * The {@link NonMetatype} type excludes all metadata from the passed type
 * `TType`.
 *
 * @typeParam TType - The type to exclude metadata.
 *
 * @public
 */
export type NonMetatype<TType> =
  TType extends Metatype<infer Type, Metadata> ? Type : TType;
