import type { EmptyObject } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ModifierData } from "./modifier-data";
import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";

/**
 * The {@link Modifier} type creates modifier descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Modifier<
  TValue extends ModifierValue,
  TDescriptorProps = EmptyObject,
> = DescriptorOwner<
  TValue,
  Descriptor<
    ModifierType,
    ModifierData<TValue, TDescriptorProps> //
  >
>;
