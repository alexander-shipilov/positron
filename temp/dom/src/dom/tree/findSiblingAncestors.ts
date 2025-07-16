import type { Node } from "../node/Node";

export function findSiblingAncestors(
  getAncestors: (node: Node) => Iterable<Node>,
  nodeA: Node,
  nodeB: Node
): [Node, Node] | null {
  let siblingAncestors: [Node, Node] | null = null;

  if (nodeA !== nodeB) {
    const ancestorsA = [...getAncestors(nodeA)].reverse();
    const ancestorsB = [...getAncestors(nodeB)].reverse();

    const index = ancestorsA.findIndex(
      (ancestorA, index) => ancestorA !== ancestorsB[index]
    );

    if (index > 0) {
      siblingAncestors = [ancestorsA[index], ancestorsB[index]];
    }
  }

  return siblingAncestors;
}
