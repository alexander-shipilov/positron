import type { Tree } from "./Tree";

export interface TreeImplementation<Node> {
  createTree(): Tree<Node>;
}
