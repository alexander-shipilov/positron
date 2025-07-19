import type { PropertyName, UnknownObject } from "@positron/core";
import type { ReactComponentReturn } from "@positron/react-core";

import type { Descriptor } from "../descriptor";

export type FactoryRender<
  TProps extends UnknownObject,
  TDescriptors extends Record<PropertyName, Descriptor>,
> = (props: TProps, descriptors: TDescriptors) => ReactComponentReturn;
