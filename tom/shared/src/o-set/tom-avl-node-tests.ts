import type { SpecEnv, SpecTests } from "@positron/tom-spec";
import { SpecMeta } from "@positron/tom-spec";

import type { TomAvlNode } from "./tom-avl-node";
import TomNodeTests from "./tom-node-tests";

export class TomAvlNodeTests
  extends TomNodeTests
  implements SpecTests<TomAvlNode, (v?: unknown) => TomAvlNode>
{
  @SpecMeta.method()
  public balance = (j: SpecEnv, create: (v?: unknown) => TomAvlNode) => {};

  @SpecMeta.property()
  public balanceFactor = (j: SpecEnv, create: (v?: unknown) => TomAvlNode) => {
    j.it("should return `0` if node has no children", () => {
      const node = create();

      j.expect(node.balanceFactor).toBe(0);
      j.expect(node.setLeft(create()).setLeft(null).balanceFactor).toBe(0);
      j.expect(node.setRight(create()).setRight(null).balanceFactor).toBe(0);
    });

    j.it("should return `1` if node has only left child which is leaf", () => {
      const node = create();

      j.expect(node.setLeft(create()).balanceFactor).toBe(1);
    });

    j.it(
      "should return `-1` if node has only right child which is leaf",
      () => {
        const node = create();

        j.expect(node.setRight(create()).balanceFactor).toBe(-1);
      },
    );

    j.it(
      "should return `0` if node has left and right children which are leafs",
      () => {
        const node = create();

        j.expect(node.setChildren(create(), create()).balanceFactor).toBe(0);
      },
    );

    j.it(
      "should return difference between heights of left and right subtree",
      () => {
        const node = create(null);
        const nodes = Array.from({ length: 5 }, (_, i) => create(i + 1));

        node.setChildren(nodes[0], nodes[4]);
        nodes[0].setChildren(nodes[1], nodes[2].setRight(nodes[3]));

        // [[2, 1, [, 3, 4]], null, 5]
        j.expect(node.balanceFactor).toBe(2);
        j.expect(nodes[0].balanceFactor).toBe(-1);
        j.expect(nodes[1].balanceFactor).toBe(0);
        j.expect(nodes[2].balanceFactor).toBe(-1);
        j.expect(nodes[3].balanceFactor).toBe(0);
        j.expect(nodes[4].balanceFactor).toBe(0);

        // [5, null, [, 1, [, 2, [, 3, 4]]]]
        node.setChildren(
          nodes[4],
          nodes[0].setRight(nodes[1].setRight(nodes[2].setRight(nodes[3]))),
        );

        j.expect(node.balanceFactor).toBe(-3);
        j.expect(nodes[0].balanceFactor).toBe(-3);
        j.expect(nodes[1].balanceFactor).toBe(-2);
        j.expect(nodes[2].balanceFactor).toBe(-1);
        j.expect(nodes[3].balanceFactor).toBe(0);
        j.expect(nodes[4].balanceFactor).toBe(0);

        // [, null, [, 1, [, 2, [, 3, [, 4, 5]]]]]
        node.setRight(
          nodes[0].setRight(
            nodes[1].setRight(nodes[2].setRight(nodes[3].setRight(nodes[4]))),
          ),
        );

        j.expect(node.balanceFactor).toBe(-5);
        j.expect(nodes[0].balanceFactor).toBe(-4);
        j.expect(nodes[1].balanceFactor).toBe(-3);
        j.expect(nodes[2].balanceFactor).toBe(-2);
        j.expect(nodes[3].balanceFactor).toBe(-1);
        j.expect(nodes[4].balanceFactor).toBe(0);
      },
    );
  };

  @SpecMeta.property(0)
  public height = (j: SpecEnv, create: (v?: unknown) => TomAvlNode) => {
    const node = create(null);
    const nodes = Array.from({ length: 5 }, (_, i) => create(i + 1));

    nodes[0].setChildren(nodes[1], nodes[2].setRight(nodes[3]));
    node.setChildren(nodes[0], nodes[4]);

    // [[2, 1, [, 3, 4]], null, 5]
    j.expect(node.height).toBe(4);
    j.expect(nodes[0].height).toBe(3);
    j.expect(nodes[1].height).toBe(1);
    j.expect(nodes[2].height).toBe(2);
    j.expect(nodes[3].height).toBe(1);
    j.expect(nodes[4].height).toBe(1);

    // [, null, [, 1, [, 2, [, 3, [, 4, 5]]]]]
    node.setRight(
      nodes[0].setRight(
        nodes[1].setRight(
          nodes[2].setRight(
            nodes[3].setRight(
              nodes[4], //
            ),
          ),
        ),
      ),
    );

    j.expect(node.height).toBe(6);
    j.expect(nodes[0].height).toBe(5);
    j.expect(nodes[1].height).toBe(4);
    j.expect(nodes[2].height).toBe(3);
    j.expect(nodes[3].height).toBe(2);
    j.expect(nodes[4].height).toBe(1);
  };
}
