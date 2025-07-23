import type { Metatype } from "../metatype";

/**
 * The {@link NonMetatype} excludes all metadata from the passed `TTarget`.
 *
 * @typeParam TTarget - The type to exclude metadata.
 */
export type NonMetatype<TTarget> =
  TTarget extends Metatype<infer Type> ? Type : TTarget;
