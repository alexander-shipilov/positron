import type { Described } from "../descriptor";

import type { CompositeConfig } from "./composite-config";
import type { CompositeDescriptor } from "./composite-descriptor";
import type { CompositeValue } from "./composite-value";
import { COMPOSITE_TYPE } from "./composite-type";

/**
 * The {@link Composite} type creates composite descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composite<TValue extends CompositeValue> = Described<
  TValue,
  CompositeDescriptor<TValue>
>;

/**
 * The {@link block} function creates composite config.
 *
 * @param value - The default value.
 */
export function composite<TValue extends CompositeValue>(
  value: TValue,
): CompositeConfig<TValue> {
  return {
    type: COMPOSITE_TYPE,
    value,
  };
}
