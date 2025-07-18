import React from "react";

import type { ReactNode } from "@positron/react-core";
import { ReactNever } from "@positron/react-core/src";

import type { Block } from "./block";
import type { BlockExtract } from "./block";
import type { DescriptorExtract } from "./descriptor";
import type { Element } from "./element";
import type { ElementComponent } from "./element";
import type { Modifier } from "./modifier";
import type { Object } from "./object";
import { Factory } from "./factory/factory";

export type ElementProps = { format?: string; value: string };

export type FactoryRender<TProps> = (
  ...args: DescriptorExtract<TProps>
) => Promise<ReactNode> | ReactNode;

export type FooComponentProps = { children?: ReactNode };

export type FooElementProps = { className?: string; value: string };

export type FooModifierValue = "bar" | "foo";

export type FooObjectValue = { prop1: string; prop2: number };

/**
 *
 */
export type FooProps = Block<
  FooComponentProps,
  {
    element: Element<string, ElementComponent<FooElementProps>>;
    modifier: Modifier<() => FooModifierValue>;
    object: Object<FooObjectValue>;
    value: string;
  }
>;

/**
 *
 * @constructor
 */
export const FooFactory = Factory.create(function Foo(
  ...[Component, { value }, { element }]: BlockExtract<FooProps>
): ReactNode {
  return (
    <Component>
      <element.Component {...element.props} value={value} />
    </Component>
  );
});

export function FooParent({ children }: FooComponentProps) {
  return children;
}

FooFactory(ReactNever).component();
