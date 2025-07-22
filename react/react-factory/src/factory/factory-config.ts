import type { TypedObject } from "@positron/core/src";

import type { Descriptor } from "../descriptor";

export interface FactoryConfig<
  TDescriptors extends TypedObject<Descriptor>,
  TProps,
> {
  descriptors: TDescriptors;
  props: TProps;
}
