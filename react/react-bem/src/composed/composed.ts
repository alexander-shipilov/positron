import type { EmptyObject } from "@positron/lang-core";

import type { Descriptor } from "../descriptor";
import type { ComposedType } from "./composed-type";
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
  TDescriptorProps = EmptyObject,
> = Descriptor<
  TValue,
  TDescriptorProps,
  ComposedType //
>;
