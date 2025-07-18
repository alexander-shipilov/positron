import type { DescriptorProps } from "../descriptor";

import type { ObjectType } from "./object-type";
import type { ObjectValue } from "./object-value";

/**
 * The {@link ObjectProps} type represents a properties of the
 * {@link Object} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ObjectProps<TValue extends ObjectValue = ObjectValue> =
  DescriptorProps<ObjectType, TValue>;
