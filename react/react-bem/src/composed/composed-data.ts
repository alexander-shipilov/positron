import type { EmptyObject } from "@positron/core";

import type { DescriptorData } from "../descriptor";

import type { ComposedValue } from "./composed-value";

/**
 * The {@link ComposedData} type represents a properties of the
 * {@link Composed} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ComposedData<
  TValue extends ComposedValue,
  TDescriptorProps = EmptyObject,
> = DescriptorData<TValue, TDescriptorProps>;
