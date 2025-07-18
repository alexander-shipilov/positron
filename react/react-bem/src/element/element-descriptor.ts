import type { Nullish } from "@positron/core";
import type { UnknownObject } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ElementComponent } from "./element-component";
import type { ElementProps } from "./element-props";
import type { ElementValue } from "./element-value";

export type ElementDescriptor<
  TValue extends ElementValue = ElementValue,
  TComponent extends Nullish<ElementComponent> = Nullish<ElementComponent>,
  TProps extends UnknownObject = UnknownObject,
> = DescriptorOwner<
  TValue,
  Descriptor<ElementProps<TValue, TComponent, TProps>>
>;
