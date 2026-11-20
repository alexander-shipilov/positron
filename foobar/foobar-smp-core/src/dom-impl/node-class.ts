import type { Any } from "@positron/lang";

import type { Node } from "./node";

/**
 *
 * @public
 */
export type NodeClass = new (...args: Any[]) => Node;
