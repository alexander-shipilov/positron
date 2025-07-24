import type { MetaData } from "../meta-data";

import type { MetaType as MetaType_ } from "./meta-type-";

/**
 * The {@link MetaType} type creates a new meta=-type.
 *
 * In general, meta refers to metadata about data types, describing their
 * characteristics and structure. It's used to define the nature of data.
 *
 * You can only define metadata for a given `TType` and `TTag` once. Calling it
 * again will return the previously defined meta regardless of the `TValue`
 * passed second time.
 *
 * @example
 * ```ts
 *  type AccountNumber = MetaType<number, "AccountNumber">
 *  type Date = MetaType<string, "format", "YYYY-MM-DD">
 * ```
 *
 * @public
 */
export type MetaType<
  TTarget,
  TTag extends symbol = symbol,
  TValue = unknown,
> = symbol extends TTag
  ? MetaType_<TTarget, MetaData>
  : TTarget extends MetaType_<infer Target, infer Data>
    ? MetaType_<Target, Data & MetaData<TTag, TValue>>
    : MetaType_<TTarget, MetaData<TTag, TValue>>;
