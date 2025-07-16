import type { Node } from "../node/Node";

export function* followingSiblings(node: Node): Iterable<Node> {
  let followingSibling = node.nextSibling;

  while (followingSibling) {
    yield followingSibling;

    followingSibling = followingSibling.nextSibling;
  }
}
