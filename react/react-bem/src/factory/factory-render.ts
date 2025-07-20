import type { ReactComponentReturn } from "@positron/react-core";
import type { ReactProps } from "@positron/react-core";

import type { BlockConfigsOf } from "../block";

/**
 * The {@link FactoryRender} represents a function to render component.
 *
 * @public
 */
export type FactoryRender<TProps extends ReactProps> = (
  config: BlockConfigsOf<TProps>,
) => ReactComponentReturn;
