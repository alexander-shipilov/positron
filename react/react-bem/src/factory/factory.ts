import type { Optional } from "@positron/core";
import type {
  ReactComponent,
  ReactComponentReturn,
} from "@positron/react-core";
import { assert } from "@positron/core";

import type { FactoryComponentProps } from "./factory-component-props";
import type { FactoryConfig } from "./factory-config";

export class Factory<TConfig extends FactoryConfig> {
  /**
   * @param render
   */
  constructor(
    protected readonly render: (props: TConfig) => ReactComponentReturn,
  ) {
    assert(render.name, "Named function expected");
  }

  public compose<TComponent extends TConfig["Component"]>(
    Component: TComponent,
  ) {
    type CurrConfig = TCurrConfig;

    type NextConfig = FactoryConfig<
      Optional<TComponent>,
      CurrConfig["props"],
      CurrConfig["descriptors"]
    >;

    return new Factory<TConfig, NextConfig>(this.render);
  }

  public create(): ReactComponent<FactoryComponentProps<TConfig, TCurrConfig>> {
    return (props: FactoryComponentProps<TConfig, TCurrConfig>) => {
      return void props;
    };
  }
}
