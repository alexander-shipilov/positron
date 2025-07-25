import type { Described } from "../descriptor2";

import type { ModifierConfig } from "./modifier-config";
import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierValue } from "./modifier-value";
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
  value: TValue,
): ModifierConfig<TValue> {
  return {
    data: value,
    type: MODIFIER_TYPE,
  } as const;
}
