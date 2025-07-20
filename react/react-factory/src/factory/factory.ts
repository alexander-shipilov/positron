import type {
  ReactAnyProps,
  ReactComponent,
  ReactProps,
  ReactPropsKey,
  ReactPropsKeyOf,
} from "@positron/react-core";
import { assert } from "@positron/core";

import type { Descriptor } from "../descriptor";
import { block } from "../block";
import { composite } from "../composite";
import { element } from "../element";
import { modifier } from "../modifier";

import type {
  ClassNames,
  ComponentProps,
  Composites,
  Elements,
  Modifiers,
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
    return <
      TName extends ReactPropsKey,
      TComponentProps extends ComponentProps<TProps>,
    >(
      name: TName,
      Component: ReactComponent<TComponentProps>,
    ) => new Factory(render, [[name, block<TComponentProps>(Component)]]);
  }

  /**
   * @param render
   * @param _descriptors
   * @param _classNames
   */
  protected constructor(
    protected readonly render: FactoryRender<TProps>,
    protected readonly _descriptors: TDefaults,
    protected readonly _classNames?: ClassNames<TDefaults>,
  ) {
    assert(render.name, "Named function expected");
  }

  classNames(classNames: ClassNames<TDefaults>) {
    return new Factory(this.render, this._descriptors, {
      ...this._classNames,
      ...classNames,
    });
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
      ...this._descriptors,
      [key, composite(value)],
    ]);
  }

  /**
   *
   */
  element<
    TKey extends ReactPropsKeyOf<Elements<TProps, TDefaults>>,
    TValue extends Elements<TProps, TDefaults>[TKey]["value"],
    TComponentProps extends Elements<TProps, TDefaults>[TKey]["props"],
  >(key: TKey, value: TValue, Component: ReactComponent<TComponentProps>) {
    return new Factory(this.render, [
      ...this._descriptors,
      [key, element(value, Component)],
    ]);
  }

  /**
   *
   */
  modifier<
    TKey extends ReactPropsKeyOf<Modifiers<TProps, TDefaults>>,
    TValue extends Modifiers<TProps, TDefaults>[TKey]["value"],
  >(key: TKey, value: TValue) {
    return new Factory(this.render, [
      ...this._descriptors,
      [key, modifier(value)],
    ]);
  }
}
