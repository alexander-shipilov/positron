import type { UnknownObject } from "@positron/core";
import type { ReactComponent } from "@positron/react-core";

export type BlockProps<TComponentProps extends UnknownObject = never> = {
  Component: ReactComponent<TComponentProps>;
};
