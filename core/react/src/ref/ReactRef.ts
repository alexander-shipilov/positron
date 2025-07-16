import type { ReactRefCallback } from "./ReactRefCallback";
import type { ReactRefObject } from "./ReactRefObject";

export type ReactRef<TValue> =
  | ReactRefCallback<TValue>
  | ReactRefObject<TValue>;
