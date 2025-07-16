import type { ComponentType, ExoticComponent } from "react";

/**
 * Component type or any exotic type (`memo`, `forwardRef` etc)
 */
export type ReactComponent<Props = object> =
  | ComponentType<Props>
  | ExoticComponent<Props>;
