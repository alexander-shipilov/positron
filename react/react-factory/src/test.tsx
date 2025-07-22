import React from "react";

import type { Nullish } from "@positron/core";
import type { ReactNode } from "@positron/react-core";
import { ReactNever } from "@positron/react-core";

import type { BlockDescriptorTarget } from "./block2";
import type { ValueDescriptor } from "./composite2";
import type { ElementDescriptor } from "./element2";
import type { FactoryArgs } from "./factory2/factory-args";
import type { Modifier } from "./modifier2";
import { Factory } from "./factory2/factory";

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

type FooProps = BlockDescriptorTarget<
  FooComponentProps,
  {
    /**
     * Property tha should be rendered as an element.
     */
    child: ElementDescriptor<string, FooElementProps1>;

    /**
     * Composite property.
     */
    data: ValueDescriptor<FooData>;

    /**
     * Modifier
     */
    modifier: Modifier<(data: unknown) => Nullish<FooModifier>>;

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

const Foo = FooFactory()
  .compose("Foo", ReactNever)
  .composite("data", { prop1: "", prop2: 0 })
  .element("child", "", ReactNever)
  .modifier("modifier", (data): FooModifier => (data ? "foo" : "bar"))
  .component();

void (<Foo value={""} />);
