import type { ReactComponent } from "@positron/react-core/src";

import type { Descriptor } from "../descriptor";

import type { FactoryConfig } from "./factory-config";

export interface Factory<
  TConfig extends FactoryConfig<any>,
  TDefaults extends NoInfer<[PropertyKey, Descriptor][]> = [],
  TProps,
> {
  addDefault<
    TKey extends keyof TConfig["descriptors"],
    TDescriptor extends Descriptor,
  >(
    key: PropertyKey,
    value: TDescriptor,
  ): void;

  component(): ReactComponent<TProps>;
}
