import type { ReactComponent } from "@positron/react-core";

import type { ElementComponentProps } from "./element-component-props";

export type ElementComponent<TProps extends ElementComponentProps = never> =
  ReactComponent<TProps>;
