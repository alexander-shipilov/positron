import type { ObjectDescriptor } from "./object-descriptor";
import type { ObjectValue } from "./object-value";

/**
 * The {@link Object} type creates object descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Object<TValue extends ObjectValue> = ObjectDescriptor<TValue>;
