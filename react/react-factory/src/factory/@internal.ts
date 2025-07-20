import type { ArrayType } from "@positron/array";
import type { PartialOptional } from "@positron/core";
import type {
  ReactProps,
  ReactPropsKey,
  ReactAnyProps,
  ReactComponent
} from "@positron/react-core";

import type { BlockDescriptorsOf } from "../block";

export type ClassNames<TDefaults extends readonly [ReactPropsKey, unknown][]> =
  PartialOptional<{ [K in ArrayType<TDefaults>[0]]: string }>;

/**
 * @internal
 */
export type ComponentProps<TProps extends ReactAnyProps> = ReactComponent<
  BlockDescriptorsOf<TProps>["Block"]["props"]
>;

/**
 * @internal
 */
export type Composites<
  TProps extends ReactProps,
  TExclude extends readonly [ReactPropsKey, unknown][],
> = Entities<TProps, "composites", TExclude>;

/**
 * @internal
 */
export type Elements<
  TProps extends ReactProps,
  TExclude extends readonly [ReactPropsKey, unknown][],
> = Entities<TProps, "elements", TExclude>;

/**
 * @internal
 */
export type Entities<
  TProps extends ReactProps,
  TName extends "composites" | "elements" | "modifiers",
  TExclude extends readonly [ReactPropsKey, unknown][],
> = Omit<BlockDescriptorsOf<TProps>[TName], ArrayType<TExclude>[0]>;

/**
 * @internal
 */
export type Modifiers<
  TProps extends ReactProps,
  TExclude extends readonly [ReactPropsKey, unknown][],
> = Entities<TProps, "modifiers", TExclude>;
