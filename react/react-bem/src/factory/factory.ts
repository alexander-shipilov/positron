import type { ReactAnyProps } from "@positron/react-core";
import { assert } from "@positron/core";

import type { FactoryRender } from "./factory-render";

export class Factory<TProps extends ReactAnyProps> {
  static create<TProps extends ReactAnyProps>(render: FactoryRender<TProps>) {
    return () => new Factory(render);
  }

  /**
   * @param render
   */
  protected constructor(protected readonly render: FactoryRender<TProps>) {
    assert(render.name, "Named function expected");
  }
}
