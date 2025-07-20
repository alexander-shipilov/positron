import type { ReactProps } from "../react-props/react-props";

/**
 * The {@link ReactVoid} component returns nothing.
 */
export function ReactVoid<TProps extends ReactProps = never>(
  props: TProps,
): undefined {
  return void props;
}
