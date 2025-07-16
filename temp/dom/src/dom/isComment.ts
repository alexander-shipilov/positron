import { Comment } from "./Comment";
import type { Node } from "./node/Node";

export function isComment(node: Node | null): node is Comment {
  return node instanceof Comment;
}
