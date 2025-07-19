import type {
  NonOptional,
  PropertyName,
  PropertyNameOf,
  PropertyOwner,
  UnionToIntersection,
} from "@positron/core";
import type { Prefixed } from "@positron/prefixed";
import type { ReactPropsOf } from "@positron/react-core";

import type { ElementDescriptor } from "../element";

import type { FactoryConfig } from "./factory-config";
import type { FactoryElementsOf } from "./factory-elements-of";

export type FactoryComponentProps<
  TConfig extends FactoryConfig,
  TCurrConfig extends FactoryConfig,
> = FactoryComponentProps_<TCurrConfig> &
  FactoryComponentPropsComponent_<TCurrConfig> &
  FactoryComponentPropsComponentProps_<TConfig, TCurrConfig> &
  FactoryComponentPropsDescriptors_<TCurrConfig>;

/**
 * @internal
 */
type FactoryComponentProps_<TConfig extends FactoryConfig> = TConfig["props"];

/**
 * @internal
 */
type FactoryComponentPropsComponent_<TConfig extends FactoryConfig> =
  PropertyOwner<"Component", TConfig["Component"]>;

/**
 * @internal
 */
type FactoryComponentPropsComponentProps_<
  TConfig extends FactoryConfig,
  TResultConfig extends FactoryConfig,
> = Omit<
  ReactPropsOf<NonOptional<TResultConfig["Component"]>>,
  keyof ReactPropsOf<NonOptional<TConfig["Component"]>>
>;

type FactoryComponentPropsDescriptors_<TConfig extends FactoryConfig> =
  FactoryComponentPropsElements_<TConfig>;

/**
 * @internal
 */
type FactoryComponentPropsElement_<
  TKey extends PropertyName,
  TDescriptor extends ElementDescriptor,
> = Prefixed<
  TKey,
  Omit<
    TDescriptor["props"],
    keyof ReactPropsOf<NonNullable<TDescriptor["Component"]>>
  > &
    Pick<TDescriptor, "Component">
> &
  PropertyOwner<TKey, TDescriptor["value"]>;

/**
 * @internal
 */
type FactoryComponentPropsElements_<TConfig extends FactoryConfig> =
  UnionToIntersection<
    {
      [Key in PropertyNameOf<
        FactoryElementsOf<TConfig>
      >]: FactoryComponentPropsElement_<Key, FactoryElementsOf<TConfig>[Key]>;
    }[PropertyNameOf<FactoryElementsOf<TConfig>>]
  >;
