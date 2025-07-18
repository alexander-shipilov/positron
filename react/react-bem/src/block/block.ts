import type { UnknownObject } from "@positron/core";
import type { ReactComponent } from "@positron/react-core";

export type Block<
  TComponentProps extends UnknownObject = never,
  TProps extends UnknownObject = UnknownObject,
> = TProps & {
  Component: ReactComponent<TComponentProps>;
};
