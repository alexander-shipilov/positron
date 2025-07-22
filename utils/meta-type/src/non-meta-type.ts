import type { MetaType } from "./meta-type";

/**
 * The {@link NonMetaType} excludes all metadata from the passed `TTarget`.
 *
 * @typeParam TTarget - The type to exclude metadata.
 */
export type NonMetaType<TTarget> =
  TTarget extends MetaType<infer Type> ? Type : TTarget;
