import type {
  TreeImplementationInterface,
  TreeNodeImplementationInterface,
  TreeNodeStoreInterface,
  TreePropsInterface,
  TreeRootImplementationInterface,
} from "../types";
import { adoptNode } from "./spec/adoptNode";
import type { TreeFragment } from "./TreeFragment";
import type { TreeNode } from "./TreeNode";
import type { TreeRoot } from "./TreeRoot";
import { cloneNode } from "./utils/cloneNode";
import { isFragment } from "./utils/isFragment";

/**
 * Tree implementation
 */
export class Tree
  implements
    TreeImplementationInterface<TreeNode>,
    TreeNodeImplementationInterface<TreeNode>,
    TreeRootImplementationInterface<TreeNode, TreeRoot, TreeFragment>
{
  get nodeStore(): TreeNodeStoreInterface<TreeNode, TreeRoot> {
    return this.props.nodeStore;
  }

  /**
   * @param props - Implementation props
   */
  constructor(
    protected readonly props: TreePropsInterface<
      TreeNode,
      TreeRoot,
      TreeFragment
    >
  ) {}

  /**
   * https://dom.spec.whatwg.org/#dom-document-adoptnode
   *
   * @param tree - Tree
   * @param node - Node
   */
  public adoptNode<T extends TreeNode>(tree: TreeRoot, node: T): T {
    adoptNode(this, tree, node);
  }

  /**
   * https://dom.spec.whatwg.org/#dom-node-appendchild
   *
   * @param parent - parent
   * @param node - node
   */
  public appendChild<T extends TreeNode>(parent: TreeNode, node: T): T {
    return this.append(node, parent);
  }

  /**
   * https://dom.spec.whatwg.org/#dom-node-clonenode
   *
   * @param node - Node
   * @param deep - Deep flag
   */
  public cloneNode(node: TreeNode, deep = false): TreeNode {
    return this.clone(node, deep);
  }

  /**
   * @param node1 - Node 1
   * @param node2 - Node 2
   */
  public compareTreePosition(node1: TreeNode, node2: TreeNode): number {
    return 0;
  }

  /**
   * Creates root fragment
   * @param rootNode - Root node
   * @param hostNode - Host
   */
  public createFragment(
    rootNode: TreeRoot,
    hostNode: TreeNode | null = null
  ): TreeFragment {
    const { createFragment } = this.props;

    return this.nodeStore.createNode(createFragment(this, hostNode), rootNode);
  }

  /**
   * Creates tree node
   * @param root - Root node
   */
  public createNode(root: TreeRoot): TreeNode {
    const { createNode } = this.props;

    return this.nodeStore.createNode(createNode(this), root);
  }

  /**
   * Creates tree root
   */
  public createRoot(): TreeRoot {
    const { createRoot } = this.props;
    const root = createRoot(this);

    return this.nodeStore.createNode(root, root);
  }

  /**
   * https://dom.spec.whatwg.org/#dom-document-importnode
   *
   * @param tree - Tree
   * @param node - Node
   */
  public importNode(tree: TreeRoot, node: TreeNode): TreeNode {
    return this.clone(node, true, tree);
  }

  /**
   * Returns the result of pre-inserting `node` into `parent` before `child`.
   * https://dom.spec.whatwg.org/#dom-node-insertbefore
   *
   * @param parent - Node node
   * @param node - Child node
   * @param child - Ref child
   */
  public insertBefore<T extends TreeNode>(
    parent: TreeNode,
    node: T,
    child: TreeNode | null = null
  ): T {
    this.preInsert(node, parent, child);

    return node;
  }

  public removeChild<T extends TreeNode>(parent: TreeNode, node: T): T {
    return node;
  }

  public replaceChild<T extends TreeNode>(
    parent: TreeNode,
    newNode: TreeNode,
    oldNode: T
  ): T {
    return oldNode;
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-append
   *
   * @param node - node
   * @param parent - parent
   */
  protected append<T extends TreeNode>(node: T, parent: TreeNode): T {
    return this.preInsert(node, parent, null);
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-clone
   *
   * @param node - node
   * @param cloneChildren - clone children flag
   * @param root - optional root
   */
  protected clone(
    node: TreeFragment | TreeNode,
    cloneChildren = false,
    root: TreeRoot = this.nodeStore.getOwnerRoot(node)
  ): TreeNode {
    const { nodeStore } = this;

    const nodeCopy = cloneNode(this, node, root);

    nodeStore.createNode(node, root);

    /*
     todo
     5. Run any cloning steps defined for node in other applicable
     specifications and pass `nodeCopy`, `node`, `ownerTree` and the
     `cloneChildren` flag if set, as parameters.
     */

    if (cloneChildren) {
      nodeStore.getChildNodes(node).forEach((childNode: TreeNode) => {
        this.insertBefore(nodeCopy, this.clone(childNode, cloneChildren, root));
      });
    }

    return nodeCopy;
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-insert
   *
   * @param node - node
   * @param parent - parent
   * @param child - child
   */
  protected insert(
    node: TreeNode,
    parent: TreeNode,
    child: TreeNode | null = null
  ) {
    const { nodeStore } = this;

    const nodes = isFragment(node)
      ? this.nodeStore.getChildNodes(node)
      : [node];

    const { length } = nodes;

    if (length !== 0) {
      const ownerTree = nodeStore.getOwnerRoot(parent);
      const childNodes = nodeStore.getChildNodes(parent);

      const referenceChild =
        node === child ? nodeStore.getNextSibling(node) : child;

      if (referenceChild !== null) {
        /*
         todo
         5.1. For each live range whose start child is parent and start
         offset is greater than `referenceChild`’s index, increase its
         start offset by `length`.

         5.2. For each live range whose end child is parent and end offset is
         greater than `referenceChild`’s index, increase its end offset by
         `length`.
         */
      }

      for (const node of nodes) {
        const inclusiveDescendants =
          this.nodeStore.getInclusiveDescendant(node);

        this.adoptNode(ownerTree, node);
        childNodes.insertItem(node, referenceChild);

        for (const descendant of inclusiveDescendants) {
          /* todo: 7.7.1. Run the insertion steps with `descendant`. */
        }
      }

      /* todo: 9. Run the children changed steps for parent.  */
    }
  }

  /**
   * Pre-inserts a `node` into a `parent` before a `child`
   * https://dom.spec.whatwg.org/#concept-node-pre-insert
   *
   * @param node - node
   * @param parent - parent
   * @param child - child
   */
  protected preInsert<T extends TreeNode>(
    node: T,
    parent: TreeNode,
    child: TreeNode | null = null
  ): T {
    /*
     todo
     1. Ensure pre-insertion validity of `node` into `parent` before `child`.
     */

    this.insert(
      node,
      parent,
      child === node ? this.nodeStore.getNextSibling(child) : child
    );

    return node;
  }
}
