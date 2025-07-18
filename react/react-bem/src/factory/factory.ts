import type { UnknownObject } from "@positron/core";
import type { Nullish } from "@positron/core";
import type { PropertyName } from "@positron/core";
import type { ReactComponent } from "@positron/react-core";
import { assert } from "@positron/core";

import type { DescriptorProps } from "../descriptor";

import type { FactoryRender } from "./factory-render";

export class Factory<
  TBlockProps extends UnknownObject,
  TProps extends UnknownObject,
  TDescriptors extends Record<PropertyName, DescriptorProps>,
> {
  public static create<
    TBlockProps extends UnknownObject,
    TProps extends UnknownObject,
    TDescriptors extends Record<PropertyName, DescriptorProps>,
  >(
    render: FactoryRender<TBlockProps, TProps, TDescriptors>,
  ): <UBlockProps extends TBlockProps>(
    Component: ReactComponent<UBlockProps>,
  ) => Factory<UBlockProps, TProps, TDescriptors> {
    return <UBlockProps extends TBlockProps>(
      Component: ReactComponent<UBlockProps>,
    ) => new Factory(render).block(Component);
  }

  /**
   *
   * @param render
   * @param Block
   */
  protected constructor(
    protected readonly render: FactoryRender<TBlockProps, TProps, TDescriptors>,
    protected readonly Block: Nullish<ReactComponent<TBlockProps>> = null,
  ) {
    assert(render.name, "Named function expected");
  }

  /**
   *
   * @param Component
   */
  public block<UBlockProps extends TBlockProps>(
    Component: ReactComponent<UBlockProps>,
  ): Factory<UBlockProps, TProps, TDescriptors> {
    return new Factory(
      this.render as FactoryRender<UBlockProps, TProps, TDescriptors>,
      Component,
    );
  }

  public component(): ReactComponent {
    return () => {
      return null;
    };
  }
}
