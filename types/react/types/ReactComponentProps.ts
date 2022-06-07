import { ReactComponent } from "./ReactComponent";

export type ReactComponentProps<T> = T extends ReactComponent<infer P>
  ? P
  : never;
