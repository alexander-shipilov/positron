import type { ReactProps } from "@positron/react-core/src";
import type { ReactPropsKeyOf } from "@positron/react-core/src";
import type { ReactPropsKey } from "@positron/react-core/src";
import type { ReactComponent } from "@positron/react-core/src";
import type { ReactAnyProps } from "@positron/react-core/src";
import { assert } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { ModifierValueTypeOf } from "../modifier";
import { block } from "../block";
import { composite } from "../composite";
import { element } from "../element";
import { modifier } from "../modifier";

import type { Elements } from "./@internal";
import type { ComponentProps } from "./@internal";
import type { Modifiers } from "./@internal";
import type { Composites } from "./@internal";
import type { ClassNames } from "./@internal";
import type { FactoryRender } from "./factory-render";

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
   * @param descriptors
   * @param classNames
   */
  protected constructor(
    protected readonly render: FactoryRender<TProps>,
    protected readonly descriptors: TDefaults,
    protected readonly classNames?: ClassNames<TDefaults>,
  ) {
    assert(render.name, "Named function expected");
  }

  withClassNames(classNames: ClassNames<TDefaults>) {
    return new Factory(this.render, this.descriptors, {
      ...this.classNames,
      ...classNames,
    });
  }

  /**
   *
   */
  withComposite<
    TKey extends ReactPropsKeyOf<Composites<TProps, TDefaults>>,
    TValue extends Composites<TProps, TDefaults>[TKey]["value"],
  >(key: TKey, value: TValue) {
    return new Factory(this.render, [
      ...this.descriptors,
      [key, composite(value)],
    ]);
  }

  /**
   *
   */
  withElement<
    TKey extends ReactPropsKeyOf<Elements<TProps, TDefaults>>,
    TValue extends Elements<TProps, TDefaults>[TKey]["value"],
    TComponentProps extends Elements<TProps, TDefaults>[TKey]["props"],
  >(key: TKey, value: TValue, Component: ReactComponent<TComponentProps>) {
    return new Factory(this.render, [
      ...this.descriptors,
      [key, element(value, Component)],
    ]);
  }

  /**
   *
   */
  withModifier<
    TKey extends ReactPropsKeyOf<Modifiers<TProps, TDefaults>>,
    TValue extends Modifiers<TProps, TDefaults>[TKey]["value"],
  >(key: TKey, value: ModifierValueTypeOf<TValue>) {
    return new Factory(this.render, [
      ...this.descriptors,
      [key, modifier(value)],
    ]);
  }
}
