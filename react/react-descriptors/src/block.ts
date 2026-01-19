import type { ReactComponent } from "@positron/react-core";

export type Block<TComponentProps, TProps> = BlockProps<TProps> & {
  Component: ReactComponent<TComponentProps>;
};

export type BlockProps<TProps> = {
  [K in keyof TProps]: TProps[K];
};
