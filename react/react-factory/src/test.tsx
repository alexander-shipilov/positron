import React from "react";

import type { Nullish } from "@positron/core";
import type { ReactNode } from "@positron/react-core";
import { ReactNever } from "@positron/react-core";

import type { Block } from "./block";
import type { Composite } from "./composite";
import type { Element } from "./element";
import type { FactoryArgs } from "./factory/factory-args";
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
  format: string;
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
    child: Element<string, FooElementProps1>;

    /**
     * Composite property.
     */
    data: Composite<FooData>;

    /**
     * Modifier
     */
    modifier: Modifier<() => Nullish<FooModifier>>;

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
export const FooFactory = Factory.create(function Foo([
  Block,
  { value, ...blockProps },
  { child, data, modifier },
]: FactoryArgs<FooProps>) {
  console.log(modifier);

  return (
    <Block {...blockProps}>
      <child.Component
        {...child.props}
        format={"ddd"}
        test={data.prop2}
        value={parseFloat(value)}
      />
    </Block>
  );
});

void FooFactory("Foo", ReactNever)
  .element("child", "", ReactNever)
  .modifier("modifier", () => "foo")
  .composite("data", { prop1: "", prop2: 0 })
  .classNames({
    data: "sds",
    Foo: "1",
    modifier: "",
  });
