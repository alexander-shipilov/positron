import type { ReactComponent } from "../react-component";

/**
 * The {@link ReactPropsOf} returns the properties of the passed
 * `TComponent`.
 *
 * @typeParam TComponent - The component to collect properties from.
 *
 * @public
 */
export type ReactPropsOf<TComponent extends ReactComponent> =
  TComponent extends ReactComponent<infer Props> ? Props : never;
