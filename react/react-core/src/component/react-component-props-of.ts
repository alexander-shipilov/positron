import type { ReactComponent } from "./index";

/**
 * The {@link ReactComponentPropsOf} returns the properties of the passed
 * `TComponent`.
 *
 * @typeParam TComponent - The component to collect properties from.
 *
 * @public
 */
export type ReactComponentPropsOf<TComponent extends ReactComponent> =
  TComponent extends ReactComponent<infer Props> ? Props : never;
