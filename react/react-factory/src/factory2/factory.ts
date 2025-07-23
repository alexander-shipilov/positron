import type {
  ReactAnyProps,
  ReactComponent,
  ReactProps,
  ReactPropsKey,
  ReactPropsKeyOf
} from "@positron/react-core";
import type { ReactComponentReturn } from "@positron/react-core";
import { assert } from "@positron/core";

import type { BlockConfig } from "../block2";
import { block } from "../block2";
import type { CompositeConfig } from "../composite2";
import { composite } from "../composite2";
import type { Descriptor } from "../descriptor2";
import type { ElementConfig } from "../element2";
import { element } from "../element2";
import type { ModifierConfig } from "../modifier2";
import { modifier } from "../modifier2";

import type {
  BlockComponentProps,
  ComponentProps,
  Composites,
  Elements,
  Modifiers
} from "./@internal";
import type { FactoryRender } from "./factory-render";

/**
 * Class to create components.
 */
export class Factory<
  TProps extends ReactProps,
  TDefaults extends [ReactPropsKey, Descriptor][],
> {
  /**
   *
   * @param render
   */
  static create<TProps extends ReactAnyProps>(render: FactoryRender<TProps>) {
    return () => new Factory(render, []);
  }

  protected readonly defaults: [ReactPropsKey, Descriptor][];

  /**
   * @param render
   * @param defaults
   */
  protected constructor(
    protected readonly render: FactoryRender<TProps>,
    defaults: TDefaults,
  ) {
    this.defaults = defaults;

    assert(render.name, "Named function expected");
  }

  component(): (
    props: ComponentProps<TProps, TDefaults>,
  ) => ReactComponentReturn {
    return () => null;
  }

  /**
   * @param key
   * @param Component
   * @protected
   */
  compose<
    TKey extends ReactPropsKey,
    TComponentProps extends BlockComponentProps<TProps>,
  >(key: TKey, Component: ReactComponent<TComponentProps>) {
    return new Factory(this.render, [
      ...this.defaults,
      [key, block(Component)],
    ] as [...TDefaults, [TKey, BlockConfig<TComponentProps>]]);
  }

  /**
   * The {@link composite} method initializes a composite object by default
   * value.
   *
   * @param key - The key
   * @param value - Default value
   */
  composite<
    TKey extends ReactPropsKeyOf<Composites<TProps, TDefaults>>,
    TValue extends Composites<TProps, TDefaults>[TKey]["value"],
  >(key: TKey, value: TValue) {
    return new Factory(this.render, [
      ...this.defaults,
      [key, composite(value)],
    ] as [...TDefaults, [TKey, CompositeConfig<TValue>]]);
  }

  /**
   *
   * @param key
   * @param value
   * @param Component
   */
  element<
    TKey extends ReactPropsKeyOf<Elements<TProps, TDefaults>>,
    TValue extends Elements<TProps, TDefaults>[TKey]["value"],
    TComponentProps extends Elements<TProps, TDefaults>[TKey]["props"],
  >(key: TKey, value: TValue, Component: ReactComponent<TComponentProps>) {
    return new Factory(this.render, [
      ...this.defaults,
      [key, element(value, Component)],
    ] as [...TDefaults, [TKey, ElementConfig<TValue, TComponentProps>]]);
  }

  /**
   *
   * @param key
   * @param value
   */
  modifier<
    TKey extends ReactPropsKeyOf<Modifiers<TProps, TDefaults>>,
    TValue extends Modifiers<TProps, TDefaults>[TKey]["value"],
  >(key: TKey, value: TValue) {
    return new Factory(this.render, [
      ...this.defaults,
      [key, modifier(value)],
    ] as [...TDefaults, [TKey, ModifierConfig<TValue>]]);
  }
}
