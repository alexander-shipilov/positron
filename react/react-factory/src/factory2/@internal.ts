import type { ArrayType } from "@positron/array";
import type { PartialOptional } from "@positron/core";
import type {
  LiteralPropertyKey,
  NonNullish,
  Optional,
  PropertyOwner
} from "@positron/core";
import type { Prefixed, PrefixedKey } from "@positron/prefixed";
import type {
  ReactAnyProps,
  ReactComponent,
  ReactProps,
  ReactPropsKey
} from "@positron/react-core";
import type { ReactPropsOf } from "@positron/react-core";

import type { BlockConfig, BlockDescriptorsOf } from "../block2";
import type { CompositeConfig } from "../composite2";
import type { DescribedTargetOf, Descriptor } from "../descriptor2";
import type { ElementConfig } from "../element2";
import type { ModifierConfig, ModifierValueTypeOf } from "../modifier2";

/**
 * @internal
 */
export type BlockComponentProps<TProps extends ReactAnyProps> = ReactComponent<
  BlockDescriptorsOf<TProps>["Block"]["props"]
>;

export type ClassNames<TDefaults extends [ReactPropsKey, unknown][]> =
  PartialOptional<{ [K in ArrayType<TDefaults>[0]]: string }>;

/**
 *
 */
export type ComponentProps<
  TProps extends ReactProps,
  TDefaults extends [ReactPropsKey, Descriptor][],
> = ComponentPropsDescriptors_<DescribedTargetOf<TProps>, TDefaults>;

/**
 * @internal
 */
export type Composites<
  TProps extends ReactProps,
  TExclude extends [ReactPropsKey, unknown][],
> = Entities<TProps, "composites", TExclude>;

/**
 * @internal
 */
export type Elements<
  TProps extends ReactProps,
  TExclude extends [ReactPropsKey, unknown][],
> = Entities<TProps, "elements", TExclude>;

/**
 * @internal
 */
export type Entities<
  TProps extends ReactProps,
  TName extends "composites" | "elements" | "modifiers",
  TExclude extends [ReactPropsKey, unknown][],
> = Exclude<
  BlockDescriptorsOf<TProps>[TName],
  LiteralPropertyKey<ArrayType<TExclude>[0]>
>;

/**
 * @internal
 */
export type Modifiers<
  TProps extends ReactProps,
  TExclude extends [ReactPropsKey, unknown][],
> = Entities<TProps, "modifiers", TExclude>;

/**
 *
 */
type ComponentPropsDescriptor_<
  TProps extends ReactProps,
  TDescriptor extends Descriptor,
  TKey extends ReactPropsKey,
> = TDescriptor extends BlockConfig
  ? ComponentPropsDescriptorBlock_<TProps, TDescriptor>
  : TDescriptor extends CompositeConfig
    ? ComponentPropsDescriptorComposite_<TProps, TDescriptor, TKey>
    : TDescriptor extends ElementConfig
      ? ComponentPropsDescriptorElement_<TProps, TDescriptor, TKey>
      : TDescriptor extends ModifierConfig
        ? ComponentPropsDescriptorModifier_<TProps, TDescriptor, TKey>
        : TProps;

/**
 *
 */
type ComponentPropsDescriptorBlock_<
  TProps extends ReactProps,
  TDescriptor extends BlockConfig,
> = PropertyOwner<"Component", Optional<TDescriptor["Component"]>> &
  ReactPropsOf<TDescriptor["Component"]> &
  TProps;

/**
 *
 */
type ComponentPropsDescriptorComposite_<
  TProps extends ReactProps,
  TDescriptor extends CompositeConfig,
  TKey extends ReactPropsKey,
> = Prefixed<TKey, Partial<TDescriptor["data"]>> &
  PropertyOwner<TKey, Optional<TDescriptor["data"]>> &
  TProps;

/**
 *
 */
type ComponentPropsDescriptorElement_<
  TProps extends ReactProps,
  TDescriptor extends ElementConfig,
  TKey extends ReactPropsKey,
> = Prefixed<TKey, TDescriptor["props"]> &
  PropertyOwner<
    PrefixedKey<TKey, "Component">,
    Optional<ReactComponent<TDescriptor["props"]>>
  > &
  PropertyOwner<TKey, Optional<TDescriptor["data"]>> &
  TProps;

/**
 *
 */
type ComponentPropsDescriptorModifier_<
  TProps extends ReactProps,
  TDescriptor extends ModifierConfig,
  TKey extends ReactPropsKey,
> = Prefixed<
  `${TKey}-${NonNullish<ModifierValueTypeOf<TDescriptor["data"]>>}`,
  Partial<TProps>
> &
  PropertyOwner<TKey, Optional<TDescriptor["data"]>> &
  TProps;

/**
 *
 */
type ComponentPropsDescriptors_<
  TProps extends ReactProps,
  TDefaults extends [ReactPropsKey, Descriptor][],
> = TDefaults extends [
  ...infer Head extends [ReactPropsKey, Descriptor][],
  infer Last extends [ReactPropsKey, Descriptor],
]
  ? ComponentPropsDescriptor_<
      ComponentPropsDescriptors_<TProps, Head>,
      Last[1],
      Last[0]
    > &
      TProps
  : TProps;
