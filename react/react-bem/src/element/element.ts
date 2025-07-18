import type { Nullish } from "@positron/core";
import type { EmptyObject } from "@positron/core";

import type { ElementComponent } from "./element-component";
import type { ElementDescriptor } from "./element-descriptor";
import type { ElementValue } from "./element-value";

/**
 * The {@link Element} type creates element descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Element<
  TValue extends ElementValue,
  TComponent extends Nullish<ElementComponent> = Nullish<ElementComponent>,
> = ElementDescriptor<TValue, TComponent, EmptyObject>;
