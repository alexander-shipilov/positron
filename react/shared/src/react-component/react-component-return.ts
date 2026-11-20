import type { ReactNode } from "../react-node";

/**
 * The {@link ReactComponentReturn} represents a return value of the
 * {@link ReactComponent}.
 *
 * @public
 */
export type ReactComponentReturn = Promise<ReactNode> | ReactNode;
