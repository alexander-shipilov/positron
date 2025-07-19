import type { EmptyObject } from "@positron/core";
import type { ReactComponent } from "@positron/react-core/src";

import type { ElementOwner } from "./element-owner";
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
  TComponent extends ReactComponent = ReactComponent,
> = ElementOwner<TValue, TComponent, EmptyObject>;
