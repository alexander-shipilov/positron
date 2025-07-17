import type { FunctionComponent } from "react";

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
export type ReactComponent<TProps = never> = FunctionComponent<TProps>;
