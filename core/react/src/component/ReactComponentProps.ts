import type { ReactComponent } from "./ReactComponent";

export type ReactComponentProps<Component> = Component extends ReactComponent<
  infer P
>
  ? P
  : never;
