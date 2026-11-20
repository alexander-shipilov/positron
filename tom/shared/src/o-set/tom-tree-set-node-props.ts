import type { TomAvlNodeProps } from "./tom-avl-node-props";

/**
 * @internal
 */
export interface TomTreeSetNodeProps extends TomAvlNodeProps {
  count: number;
}
