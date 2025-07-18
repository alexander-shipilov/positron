import type { Descriptor } from "../descriptor";

import type { ElementProps } from "./element-props";

/**
 * The {@link ElementPropsOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ElementPropsOf<TValue> =
  TValue extends Descriptor<infer Props extends ElementProps> ? Props : 1;
