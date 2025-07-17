import React from "react";

import type { EmptyObject } from "@positron/core";
import type { ReactComponent, ReactNode } from "@positron/react-core";
import { assert } from "@positron/core";

import type { Composed } from "./composed";
import type {
  DescriptorExtract,
  DescriptorOmit,
  DescriptorPick,
} from "./descriptor";
import type { Element, ElementKeyOf } from "./element";
import type { Modifier } from "./modifier";

export type ElementProps = { format: string; value: string };

export type FactoryRender<TProps> = (
  ...args: DescriptorExtract<TProps>
) => Promise<ReactNode> | ReactNode;

export type FooComposedValue = { prop1: string; prop2: number };

export type FooElementProps = { className?: string; value: string };

export type FooModifierValue = "bar" | "foo";

export type FooProps<TElementProps = EmptyObject> = {
  composed: Composed<FooComposedValue>;
  element: Element<string, FooElementProps, TElementProps>;
  modifier: Modifier<() => FooModifierValue, { ted: string }>;
  value?: string;
};

export class Factory<TProps, TDefaults = EmptyObject> {
  protected elements = new Map<
    ElementKeyOf<TProps>,
    [ReactComponent, unknown]
  >();

  constructor(protected readonly render: FactoryRender<TProps>) {
    assert(render.name, "Named function expected");
  }

  public create(): ReactComponent {
    const { render } = this;

    return () => {
      const props = {} as DescriptorOmit<TProps>;
      const descs = {} as DescriptorPick<TProps>;

      return render(props, descs);
    };
  }

  public element<
    TName extends Exclude<ElementKeyOf<TProps>, keyof TDefaults>,
    TElementProps,
    TElementDefaults extends Partial<TElementProps>,
  >(
    name: TName,
    Component: ReactComponent<TElementProps>,
    defaults?: NoInfer<TElementDefaults>,
  ): Factory<TProps, Record<TName, TElementDefaults> & TDefaults> {
    this.elements.set(name, [Component, defaults]);

    return this;
  }
}

export function FooFactory<TElementProps extends ElementProps>() {
  return new Factory(function Foo(
    ...[{ value }, { composed, element }]: DescriptorExtract<
      FooProps<TElementProps>
    >
  ): ReactNode {
    return (
      <element.Component
        {...element.props}
        className={element.className}
        value={value ?? composed.value.prop1}
      />
    );
  });
}

const Foo = FooFactory<ElementProps>();

Foo.element("element", (props: ElementProps) => void props, {}); //
