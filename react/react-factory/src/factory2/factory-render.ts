import type { ReactAnyProps, ReactComponentReturn } from "@positron/react-core";

import type { FactoryArgs } from "./factory-args";

/**
 * The {@link FactoryRender} represents a function to render component.
 *
 * @public
 */
export type FactoryRender<TProps extends ReactAnyProps> = (
  config: FactoryArgs<TProps>,
) => ReactComponentReturn;
