import type { PropertyNameOf } from "@positron/core/src";

import type { ElementDescriptor } from "../element";

import type { FactoryConfig } from "./factory-config";
import type { FactoryDescriptors } from "./factory-descriptors";

export type FactoryDescriptorsOf<
  TDescriptors extends FactoryDescriptors,
  TKey extends PropertyNameOf<TDescriptors> = PropertyNameOf<TDescriptors>,
> = {
  [Key in PropertyNameOf<TDescriptors, TKey>]: TDescriptors[Key];
};

export type FactoryElementsOf<TConfig extends FactoryConfig> = {
  [Key in PropertyNameOf<
    TConfig["descriptors"]
  > as TConfig["descriptors"][Key] extends ElementDescriptor
    ? Key
    : never]: TConfig["descriptors"][Key] extends ElementDescriptor
    ? TConfig["descriptors"][Key]
    : never;
};
