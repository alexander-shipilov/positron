import type { SpecEnv, SpecTests } from "@positron/tom-spec";
import { assert, isIterator } from "@positron/lang";
import { SpecMeta } from "@positron/tom-spec";

import type { TomNode } from "./tom-node";
import type { TomNodeTreeProps } from "./tom-node-tree-props";

class TomNodeTests implements SpecTests<
  TomNode<unknown>,
  (v?: unknown) => TomNode<unknown>
> {
  @SpecMeta.method()
  public ancestors = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should return an iterator", () => {
      j.expect(isIterator(create(1).ancestors())).toBe(true);
    });

    j.it("should return an Iterable of node ancestors", () => {
      const node = create(1);

      j.expect([...node.ancestors()]).toEqual([]);
      j.expect([...assert(node.setLeft(create(2)).left).ancestors()]).toEqual([
        node,
      ]);
    });
  };

  @SpecMeta.method()
  public descendants = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should return an iterator", () => {
      j.expect(isIterator(create(1).descendants())).toBe(true);
    });

    j.it("should return an Iterable of node descendant in tree order", () => {
      const node = create(null);
      const child1 = create(1);
      const child2 = create(2);
      const child3 = create(3);
      const child4 = create(4);

      j.expect([...node.descendants()]).toEqual([]);

      child1.setChildren(child2, child3);
      node.setChildren(child1, child4);

      // [[2, 1, 3], null, 4]
      j.expect([...node.descendants()]).toEqual([
        child2,
        child1,
        child3,
        child4,
      ]);
    });
  };

  @SpecMeta.method()
  public getLeftLeaf = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should be `node` if node does not contain children", () => {
      const node = create(null);

      j.expect(node.getLeftLeaf()).toEqual(node);
    });

    j.it("should return a last left leaf", () => {
      const node = create(null);

      const left1 = create(1);
      const left2 = create(2);
      const left3 = create(3);

      node.setLeft(left1);
      j.expect(node.getLeftLeaf()).toEqual(left1);

      left1.setLeft(left2);
      j.expect(node.getLeftLeaf()).toBe(left2);
      j.expect(left1.getLeftLeaf()).toBe(left2);

      left2.setLeft(left3);
      j.expect(node.getLeftLeaf()).toBe(left3);
      j.expect(left1.getLeftLeaf()).toBe(left3);
    });
  };

  @SpecMeta.method()
  public getRightLeaf = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should be `node` if node does not contain children", () => {
      const node = create(null);

      j.expect(node.getRightLeaf()).toBe(node);
    });

    j.it("should return a last right leaf", () => {
      const node = create(null);

      const right1 = create(1);
      const right2 = create(2);
      const right3 = create(3);

      node.setRight(right1);
      j.expect(node.getRightLeaf()).toBe(right1);

      right1.setRight(right2);
      j.expect(node.getRightLeaf()).toBe(right2);
      j.expect(right1.getRightLeaf()).toBe(right2);

      right2.setRight(right3);
      j.expect(node.getRightLeaf()).toBe(right3);
      j.expect(right1.getRightLeaf()).toBe(right3);
    });
  };

  @SpecMeta.method()
  public getRoot = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return `node` if node has no parent", () => {
      const node = create(null);

      j.expect(node.getRoot()).toBe(node);
    });

    j.it("should return a root node", () => {
      const node = create(null);

      const child1 = create(1);
      const child2 = create(2);
      const child3 = create(3);

      node.setLeft(child1);
      j.expect(child1.getRoot()).toBe(node);

      child1.setRight(child2);
      j.expect(node.getRoot()).toBe(node);
      j.expect(child1.getRoot()).toBe(node);

      child2.setRight(child3);
      j.expect(node.getRoot()).toBe(node);
      j.expect(child1.getRoot()).toBe(node);
    });
  };

  @SpecMeta.method("node")
  public isAncestorOf = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should return `true` if node is ancestor of `node`", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      j.expect(node.isAncestorOf(child1)).toBe(true);
      j.expect(node.isAncestorOf(child2)).toBe(true);
      j.expect(node.isAncestorOf(child3)).toBe(true);
      j.expect(child1.isAncestorOf(child3)).toBe(true);
    });

    j.it("should return `false` if `node` is node itself", () => {
      const node = create();

      j.expect(node.isAncestorOf(node)).toBe(false);
    });

    j.it("should return `false` if node is not ancestor of `node`", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      j.expect(node.isAncestorOf(create())).toBe(false);
      j.expect(child1.isAncestorOf(node)).toBe(false);
      j.expect(child2.isAncestorOf(node)).toBe(false);
      j.expect(child3.isAncestorOf(node)).toBe(false);
      j.expect(child3.isAncestorOf(child2)).toBe(false);
    });
  };

  @SpecMeta.method("node")
  public isDescendantOf = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should return `true` if node is descendant of `node`", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      j.expect(child1.isDescendantOf(node)).toBe(true);
      j.expect(child2.isDescendantOf(node)).toBe(true);
      j.expect(child3.isDescendantOf(node)).toBe(true);
      j.expect(child3.isDescendantOf(child1)).toBe(true);
    });

    j.it("should return `false` if `node` is node itself", () => {
      const node = create();

      j.expect(node.isDescendantOf(node)).toBe(false);
    });

    j.it("should return `false` if node is not descendant of `node`", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      j.expect(node.isDescendantOf(create())).toBe(false);
      j.expect(node.isDescendantOf(child1)).toBe(false);
      j.expect(node.isDescendantOf(child2)).toBe(false);
      j.expect(node.isDescendantOf(child3)).toBe(false);
      j.expect(child2.isDescendantOf(child3)).toBe(false);
    });
  };

  @SpecMeta.property()
  public isLeft = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return `true` if node is left node of its parent", () => {
      const node = create(null);
      const child1 = create(1);

      node.setLeft(child1);
      j.expect(child1.isLeft).toBe(true);
    });

    j.it("should return `false` if node is root node", () => {
      const node = create(null);

      j.expect(node.isLeft).toBe(false);
    });

    j.it("should return `false` if node is right node of its parent", () => {
      const node = create(null);
      const child1 = create(1);

      node.setRight(child1);
      j.expect(node.isLeft).toBe(false);
    });
  };

  @SpecMeta.property()
  public isRight = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return `true` if node is left node of its parent", () => {
      const node = create(null);
      const child1 = create(1);

      node.setRight(child1);
      j.expect(child1.isRight).toBe(true);
    });

    j.it("should return `false` if node is root node", () => {
      const node = create(null);

      j.expect(node.isRight).toBe(false);
    });

    j.it("should return `false` if node is right node of its parent", () => {
      const node = create(null);
      const child1 = create(1);

      node.setRight(child1);
      j.expect(node.isRight).toBe(false);
    });
  };

  @SpecMeta.property(null)
  public left = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return left child", () => {
      const node = create(null);
      const child1 = create(1);

      node.setLeft(child1);
      j.expect(node.left).toBe(child1);
    });

    j.it("should return `null` if node has no left child", () => {
      j.expect(create(null).left).toBe(null);
    });
  };

  @SpecMeta.property(null)
  public parent = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return parent child", () => {
      const node = create(null);
      const child1 = create(1);
      const child2 = create(2);

      node.setRight(child1);
      j.expect(child1.parent).toBe(node);

      child1.setLeft(child2);
      j.expect(child2.parent).toBe(child1);
      j.expect(child1.parent).toBe(node);
    });

    j.it("should return `null` if node has no parent child", () => {
      j.expect(create(null).parent).toBe(null);
    });
  };

  @SpecMeta.property(null)
  public right = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return right child", () => {
      const node = create(null);
      const child1 = create(1);

      node.setRight(child1);
      j.expect(node.right).toBe(child1);
    });

    j.it("should return `null` if node has no right child", () => {
      j.expect(create(null).right).toBe(null);
    });
  };

  @SpecMeta.method()
  public rotateLeft = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it(
      "should rotate node left: [L, a, [C, b, R]] --> [[L, a, C], b, R]",
      () => {
        const C = create("C");
        const L = create("L");
        const R = create("R");

        const b = create("b").setChildren(C, R);
        const a = create("a").setChildren(L, b);

        const result = a.rotateLeft();

        j.expect(result).toBe(b);

        j.expect(b.parent).toBe(null);
        j.expect(b.left).toBe(a);
        j.expect(b.right).toBe(R);
        j.expect(a.left).toBe(L);
        j.expect(a.right).toBe(C);
      },
    );

    j.it("should throw if node has no right child", () => {
      j.expect(() => create().rotateLeft()).toThrow();
    });
  };

  @SpecMeta.method()
  public rotateLeftRight = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it(
      "should rotate node left-right: [L, a [[M, c, N], b, R]] --> [[L, a, M], c, [N, b, R]]",
      () => {
        const L = create("L");
        const M = create("M");
        const N = create("N");
        const R = create("R");

        const c = create("c").setChildren(M, N);
        const b = create("b").setChildren(c, R);
        const a = create("a").setChildren(L, b);

        const result = a.rotateLeftRight();

        j.expect(result).toBe(c);

        j.expect(c.parent).toBe(null);
        j.expect(c.left).toBe(a);
        j.expect(c.right).toBe(b);
        j.expect(a.left).toBe(L);
        j.expect(a.right).toBe(M);
        j.expect(b.left).toBe(N);
        j.expect(b.right).toBe(R);
      },
    );

    j.it("should throw if node has no right child", () => {
      const node = create().setLeft(create());

      j.expect(() => node.rotateLeftRight()).toThrow();
    });

    j.it("should throw if node right child has no left child", () => {
      const node = create().setRight(create());

      j.expect(() => node.rotateLeftRight()).toThrow();
    });
  };

  @SpecMeta.method()
  public rotateRight = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it(
      "should rotate node right: [[L, b, C], a, R] --> [L, b, [C, a, R]]",
      () => {
        const C = create("C");
        const L = create("L");
        const R = create("R");

        const b = create("b").setChildren(L, C);
        const a = create("a").setChildren(b, R);

        const result = a.rotateRight();

        j.expect(result).toBe(b);

        j.expect(b.parent).toBe(null);
        j.expect(b.left).toBe(L);
        j.expect(b.right).toBe(a);
        j.expect(a.left).toBe(C);
        j.expect(a.right).toBe(R);
      },
    );

    j.it("should throw if node has no left child", () => {
      j.expect(() => create(null).rotateRight()).toThrow();
    });
  };

  @SpecMeta.method()
  public rotateRightLeft = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it(
      "should rotate node right-left: [[L, b, [M, c, N]], a, R] --> [[L, b, M], c, [N, a, R]]",
      () => {
        const L = create("L");
        const M = create("M");
        const N = create("N");
        const R = create("R");

        const c = create("c").setChildren(M, N);
        const b = create("b").setChildren(L, c);
        const a = create("a").setChildren(b, R);

        const result = a.rotateRightLeft();

        j.expect(result).toBe(c);

        j.expect(c.parent).toBe(null);
        j.expect(c.left).toBe(b);
        j.expect(c.right).toBe(a);
        j.expect(b.left).toBe(L);
        j.expect(b.right).toBe(M);
        j.expect(a.left).toBe(N);
        j.expect(a.right).toBe(R);
      },
    );

    j.it("should throw if node has no left child", () => {
      const node = create().setLeft(create());

      j.expect(() => node.rotateRightLeft()).toThrow();
    });

    j.it("should throw if node left child has no right child", () => {
      const node = create().setLeft(create());

      j.expect(() => node.rotateRightLeft()).toThrow();
    });
  };

  @SpecMeta.method("left", "right")
  public setChildren = (
    j: SpecEnv,
    create: (v?: unknown) => TomNode<unknown>,
  ) => {
    j.it("should set left and right child of node", () => {
      const node = create();
      const left = create();
      const right = create();

      j.expect(node.left).toBe(null);
      j.expect(node.right).toBe(null);

      node.setChildren(left, right);

      j.expect(node.left).toBe(left);
      j.expect(node.right).toBe(right);
    });

    j.it("should update `left` and `right` parents", () => {
      const node = create();
      const left = create();
      const right = create();

      node.setChildren(left, right);

      j.expect(left.parent).toBe(node);
      j.expect(right.parent).toBe(node);
    });

    j.it("should return node itself", () => {
      const node = create();

      j.expect(node.setChildren(null, null)).toBe(node);
    });

    j.it("should reset delete left and right children if passed `null`", () => {
      const node = create();
      const left = create();
      const right = create();

      node.setChildren(left, right).setChildren(null, null);

      j.expect(node.left).toBe(null);
      j.expect(node.right).toBe(null);
    });

    j.it(
      "should set left child to `null` and `right` to `right` if `left` equals `right`",
      () => {
        const node = create(1);
        const child = create(2);

        node.setChildren(child, child);

        j.expect(node.left).toBe(null);
        j.expect(node.right).toBe(child);
        j.expect(child.parent).toBe(node);
      },
    );

    j.it("should throw if node itself passed", () => {
      const node = create();

      j.expect(() => node.setChildren(node, null)).toThrow();
      j.expect(() => node.setChildren(null, node)).toThrow();
    });

    j.it("should throw if node ancestor passed", () => {
      const node = create();
      const child = create();

      node.setChildren(child, null);

      j.expect(() => child.setChildren(node, null)).toThrow();
      j.expect(() => child.setChildren(null, node)).toThrow();
    });

    j.it(
      "should not change neither node neither `left` neither `right` if thrown",
      () => {
        const node = create();
        const child1 = create();
        const child2 = create();
        const child3 = create();

        child1.setChildren(child2, child3);
        node.setRight(child1);

        [
          [child1, node],
          [child2, node],
          [child2, child1],
          [child3, node],
        ].forEach(([node1, node2]) => {
          const { left: left1, parent: parent1, right: right1 } = node1;
          const { left: left2, parent: parent2, right: right2 } = node2;

          j.expect(() => node1.setChildren(node2, null)).toThrow();
          j.expect(() => node1.setChildren(null, node2)).toThrow();

          expectNode(j, node1, { left: left1, parent: parent1, right: right1 });
          expectNode(j, node2, { left: left2, parent: parent2, right: right2 });
        });
      },
    );
  };

  @SpecMeta.method("left")
  public setLeft = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should set left child", () => {
      const node = create();
      const left = create();

      j.expect(node.left).toBe(null);
      j.expect(node.right).toBe(null);

      node.setLeft(left);

      j.expect(node.left).toBe(left);
    });

    j.it("should update `left` parent", () => {
      const node = create();
      const left = create();

      node.setLeft(left);

      j.expect(left.parent).toBe(node);
    });

    j.it("should return node itself", () => {
      const node = create();

      j.expect(node.setLeft(null)).toBe(node);
    });

    j.it("should delete left child if null passed", () => {
      const node = create();
      const left = create();

      node.setLeft(left).setLeft(null);

      j.expect(node.left).toBe(null);
    });

    j.it("should throw if node itself passed", () => {
      const node = create();

      j.expect(() => node.setLeft(node)).toThrow();
    });

    j.it("should throw if node ancestor passed", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setLeft(child1);

      j.expect(() => child1.setLeft(node)).toThrow();
      j.expect(() => child2.setLeft(node)).toThrow();
      j.expect(() => child2.setLeft(child1)).toThrow();
      j.expect(() => child3.setLeft(node)).toThrow();
    });

    j.it("should not change neither node neither `left` if thrown", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      [
        [child1, node],
        [child2, node],
        [child2, child1],
        [child3, node],
      ].forEach(([node1, node2]) => {
        const { left: left1, parent: parent1, right: right1 } = node1;
        const { left: left2, parent: parent2, right: right2 } = node2;

        j.expect(() => node1.setLeft(node2)).toThrow();

        expectNode(j, node1, { left: left1, parent: parent1, right: right1 });
        expectNode(j, node2, { left: left2, parent: parent2, right: right2 });
      });
    });
  };

  @SpecMeta.method("right")
  public setRight = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should set right child", () => {
      const node = create();
      const right = create();

      j.expect(node.right).toBe(null);
      j.expect(node.right).toBe(null);

      node.setRight(right);

      j.expect(node.right).toBe(right);
    });

    j.it("should update `right` parent", () => {
      const node = create();
      const right = create();

      node.setRight(right);

      j.expect(right.parent).toBe(node);
    });

    j.it("should return node itself", () => {
      const node = create();

      j.expect(node.setRight(null)).toBe(node);
    });

    j.it("should delete right child if null passed", () => {
      const node = create();
      const right = create();

      node.setRight(right).setRight(null);

      j.expect(node.right).toBe(null);
    });

    j.it("should throw if node itself passed", () => {
      const node = create();

      j.expect(() => node.setRight(node)).toThrow();
    });

    j.it("should throw if node ancestor passed", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      j.expect(() => child1.setRight(node)).toThrow();
      j.expect(() => child2.setRight(node)).toThrow();
      j.expect(() => child2.setRight(child1)).toThrow();
      j.expect(() => child3.setRight(node)).toThrow();
    });

    j.it("should not change neither node neither `right` if thrown", () => {
      const node = create();
      const child1 = create();
      const child2 = create();
      const child3 = create();

      child1.setChildren(child2, child3);
      node.setRight(child1);

      [
        [child1, node],
        [child2, node],
        [child2, child1],
        [child3, node],
      ].forEach(([node1, node2]) => {
        const { left: left1, parent: parent1, right: right1 } = node1;
        const { left: left2, parent: parent2, right: right2 } = node2;

        j.expect(() => node1.setRight(node2)).toThrow();

        expectNode(j, node1, { left: left1, parent: parent1, right: right1 });
        expectNode(j, node2, { left: left2, parent: parent2, right: right2 });
      });
    });
  };

  @SpecMeta.property()
  public value = (j: SpecEnv, create: (v?: unknown) => TomNode<unknown>) => {
    j.it("should return stored value", () => {
      j.expect(create(1).value).toBe(1);
      j.expect(create(2).value).toBe(2);
    });

    j.it("should return `undefined` by default", () => {
      j.expect(create().value).toBeUndefined();
    });
  };
}

/**
 *
 */
function expectNode(
  j: SpecEnv,
  node: TomNode<unknown>,
  props: TomNodeTreeProps,
) {
  j.expect(node.parent).toBe(props.parent);
  j.expect(node.left).toBe(props.left);
  j.expect(node.right).toBe(props.right);
}

export default TomNodeTests;
