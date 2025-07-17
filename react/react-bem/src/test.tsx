import React from "react";

import type { EmptyObject } from "@positron/core";
import type { ReactNode } from "@positron/react-core";
import type { ReactComponent } from "@positron/react-core";
import { assert } from "@positron/core";

import type { Composed } from "./composed";
import type { ExtractDescriptors } from "./descriptor";
import type { DescriptorKeyOf } from "./descriptor";
import type { OmitDescriptors } from "./descriptor";
import type { PickDescriptors } from "./descriptor";
import type { Element } from "./element";
import type { Modifier } from "./modifier";

export type ElementProps = { format: string; value: string };

export type FactoryRender<TProps> = (
  ...args: ExtractDescriptors<TProps>
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
    DescriptorKeyOf<TProps>,
    [ReactComponent, unknown]
  >();

  constructor(protected readonly render: FactoryRender<TProps>) {
    assert(render.name, "Named function expected");
  }

  public create(): ReactComponent {
    const { render } = this;

    return () => {
      const props = {} as OmitDescriptors<TProps>;
      const descs = {} as PickDescriptors<TProps>;

      return render(props, descs);
    };
  }

  public element<
    TName extends Exclude<DescriptorKeyOf<TProps>, keyof TDefaults>,
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
    ...[{ value }, { composed, element }]: ExtractDescriptors<
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
