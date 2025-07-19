import React from "react";

import type { ReactComponent, ReactNode } from "@positron/react-core";

import type { Block } from "./block";
import type { Composite } from "./composite";
import type { Element } from "./element";
import type { FactoryConfig } from "./factory/factory-config";
import type { Modifier } from "./modifier";
import { Factory } from "./factory/factory";

export type ComponentProps1 = {
  bar?: string;
  children?: ReactNode;
  foo?: number;
};

export type ComponentProps2 = {
  children?: ReactNode;
  foo?: number;
};

export type FooComponentProps = { children?: ReactNode };

export type FooData = {
  prop1: string;
  prop2: number;
};

export type FooElementProps = {
  test: number;
  value: number;
};

export type FooElementProps1 = {
  format?: string;
  test: number;
  value: number;
};

export type FooModifier = "bar" | "foo";

type FooProps = Block<
  FooComponentProps,
  {
    /**
     * Property tha should be rendered as an element.
     */
    child: Element<string, ReactComponent<FooElementProps>>;

    /**
     * Composite property.
     */
    data: Composite<FooData>;

    /**
     * Modifier
     */
    modifier: Modifier<() => FooModifier>;

    /**
     * Value.
     */
    value: string;
  }
>;

/**
 *
 * @constructor
 */
export const FooFactory = new Factory(function Foo({
  Component,
  composites: { data },
  elements: { child },
  modifiers: { modifier },
  props: { value, ...componentProps },
}: FactoryConfig<FooProps>): ReactNode {
  console.log(modifier.value);

  return (
    <Component {...componentProps}>
      <child.Component
        {...child.props}
        test={data.value.prop2}
        value={parseFloat(value)}
      />
    </Component>
  );
});
