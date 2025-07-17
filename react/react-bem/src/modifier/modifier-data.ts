import type { ClassName, ClassNameProp } from "@positron/react-core";

import type { DescriptorData } from "../descriptor";

import type { ModifierValue } from "./modifier-value";
import type { ModifierValueOf } from "./modifier-value-of";

/**
 * The {@link ModifierData} type represents a properties of the
 * {@link Modifier} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ModifierData<
  TValue extends ModifierValue,
  TDescriptorProps,
> = DescriptorData<
  ModifierValueOf<TValue>,
  Omit<TDescriptorProps, ClassNameProp>
> & {
  /**
   * Class name of modifier
   */
  className: ClassName;
};
