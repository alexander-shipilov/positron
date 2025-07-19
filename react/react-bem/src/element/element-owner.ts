import type { UnknownObject } from "@positron/core";
import type { ReactComponent } from "@positron/react-core/src";

import type { DescriptorClass, DescriptorOwner } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";
import type { ElementValue } from "./element-value";

export type ElementOwner<
  TValue extends ElementValue = ElementValue,
  TComponent extends ReactComponent = ReactComponent,
  TProps extends UnknownObject = UnknownObject,
> = DescriptorOwner<
  TValue,
  DescriptorClass<ElementDescriptor<TValue, TComponent, TProps>>
>;
