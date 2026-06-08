import type { Any } from "@positron/core";

import type { Node } from "./node";

/**
 *
 * @public
 */
export type NodeClass = new (...args: Any[]) => Node;
