import type { Descriptor } from "../descriptor";

import type { ObjectProps } from "./object-props";

/**
 * The {@link ObjectPropsOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ObjectPropsOf<TValue> =
  TValue extends Descriptor<infer Props extends ObjectProps> ? Props : never;
