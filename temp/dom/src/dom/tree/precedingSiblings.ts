import type { Node } from "../node/Node";

export function* precedingSiblings(node: Node): Iterable<Node> {
  let precedingSibling = node.previousSibling;

  while (precedingSibling) {
    yield precedingSibling;

    precedingSibling = precedingSibling.previousSibling;
  }
}
