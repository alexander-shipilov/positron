import type { UnknownObject } from "@positron/core";
import type { PropertyName } from "@positron/core/src";
import type { ReactComponentReturn } from "@positron/react-core";
import type { ReactComponent } from "@positron/react-core";

import type { DescriptorProps } from "../descriptor";

export type FactoryRender<
  TBlockProps extends UnknownObject,
  TProps extends UnknownObject,
  TDescriptors extends Record<PropertyName, DescriptorProps>,
> = (
  Component: ReactComponent<TBlockProps>,
  props: TProps,
  descriptors: TDescriptors,
) => ReactComponentReturn;
