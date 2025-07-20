import type { ReactComponentReturn } from "@positron/react-core";
import type { ReactAnyProps } from "@positron/react-core/src";

import type { FactoryArgs } from "./factory-args";

/**
 * The {@link FactoryRender} represents a function to render component.
 *
 * @public
 */
export type FactoryRender<TProps extends ReactAnyProps> = (
  config: FactoryArgs<TProps>,
) => ReactComponentReturn;
