import type { ReactComponent } from "./react-component";

/**
 * @public
 * Type {@link ReactComponentProps} infers component props from the passed
 *   `TComponent`
 */
export type ReactComponentProps<TComponent extends ReactComponent> =
  TComponent extends ReactComponent<infer TProps> ? TProps : never;
