import type { Described } from "../descriptor";

import type { ModifierConfig } from "./modifier-config";
import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierValue } from "./modifier-value";
import type { ModifierValueTypeOf } from "./modifier-value-type-of";
import { MODIFIER_TYPE } from "./modifier-type";

/**
 * The {@link Modifier} type creates modifier descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Modifier<TValue extends ModifierValue> = Described<
  TValue,
  ModifierDescriptor<TValue>
>;

/**
 * The {@link modifier} function creates modifier descriptor.
 *
 * @param value - The default value
 */
export function modifier<TValue extends ModifierValue>(
  value: ModifierValueTypeOf<TValue>,
): ModifierConfig<TValue> {
  return {
    type: MODIFIER_TYPE,
    value,
  };
}
