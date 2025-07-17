import type { EmptyObject, UnknownObject } from "@positron/core";

import type { DescriptorOwner } from "../descriptor";

import type { ComposedData } from "./composed-data";
import type { ComposedDescriptor } from "./composed-descriptor";
import type { ComposedValue } from "./composed-value";

/**
 * The {@link Composed} type creates composed descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composed<
  TValue extends ComposedValue,
  TDescriptorProps extends UnknownObject = EmptyObject,
> = DescriptorOwner<
  TValue,
  ComposedDescriptor<
    ComposedData<TValue, TDescriptorProps> //
  >
>;
