import type { Descriptor } from "../descriptor";

import type { ModifierProps } from "./modifier-props";

/**
 * The {@link ModifierPropsOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ModifierPropsOf<TValue> =
  TValue extends Descriptor<infer Props extends ModifierProps> ? Props : never;
