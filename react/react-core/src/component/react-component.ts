import type { ReactProps } from "../props";

import type { ReactComponentReturn } from "./react-component-return";

/**
 * The {@link ReactComponent} type represents supported components.
 *
 * @remarks
 * We are not planning to use class components, so this type contains only
 *   `React.FunctionComponent`. If you are going to use class components
 *   exported from external libraries, please wrap them into functions.
 *
 * @public
 */
export interface ReactComponent<TProps extends ReactProps = never> {
  (props: TProps): ReactComponentReturn;

  /**
   * Used in debugging messages. You might want to set it explicitly if you
   * want to display a different name for debugging purposes.
   *
   * @example
   * ```tsx
   *  const MyComponent: FC = () => {
   *    return <div>Hello!</div>
   *  }
   *
   *  MyComponent.displayName = 'MyAwesomeComponent'
   * ```
   */
  displayName?: string | undefined;
}
