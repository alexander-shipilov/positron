import { ComponentType, ExoticComponent } from "react";

/**
 * Component type or any exotic type (`memo`, `forwardRef` etc)
 */
export type ReactComponent<P = Record<string, unknown>> =
  | ComponentType<P>
  | ExoticComponent<P>;
