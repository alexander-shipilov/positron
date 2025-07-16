import {
  TreeNodeStoreInterface,
  TreeNodeStorePropsInterface,
  TreeSetInterface,
} from "../types";
import { TreeSet } from "./TreeSet";
import { TreeStoreMap } from "./TreeStoreMap";

export class TreeNodeStore<TNode extends object, TRoot extends TNode>
  implements TreeNodeStoreInterface<TNode, TRoot>
{
  /**
   * Properties associated to the created nodes
   */
  protected propsMap = new TreeStoreMap<
    TNode,
    TreeNodeStorePropsInterface<TNode, TRoot>
  >();

  /**
   * Creates node properties
   * @param node - Node
   * @param ownerRoot - Root node
   */
  public createNode<T extends TNode>(node: T, ownerRoot: TRoot): T {
    return this.propsMap.set(node, {
      childNodes: new TreeSet<TNode>(),
      parentNode: null,
      ownerRoot,
    });
  }

  /**
   * Returns child nodes of the provided `node`
   * @param node - Node
   */
  public getChildNodes(node: TNode): TreeSetInterface<TNode> {
    return this.getNode(node).childNodes;
  }

  /**
   * Returns descendants of the provided `node`
   * @param node - Node
   */
  public *getDescendant(node: TNode): Generator<TNode> {
    for (const childNode of this.getChildNodes(node)) {
      yield childNode;
      yield* this.getDescendant(childNode);
    }
  }

  /**
   * Returns the first child of the provided `node`
   * @param node - Node
   */
  public getFirstChild(node: TNode): TNode | null {
    return this.getChildNodes(node).firstItem();
  }

  /**
   * Returns inclusive descendants of the provided `node`
   * @param node - Node
   */
  public *getInclusiveDescendant(node: TNode): Generator<TNode> {
    yield node;
    yield* this.getDescendant(node);
  }

  /**
   * Returns an index of the provided `node`
   * @param node - Node
   */
  public getIndex(node: TNode): number {
    const parentNode = this.getParentNode(node);

    return parentNode ? this.getChildNodes(parentNode).indexOf(node) : NaN;
  }

  /**
   * Returns the last child of the provided `node`
   * @param node - Node
   */
  public getLastChild(node: TNode): TNode | null {
    return this.getChildNodes(node).lastItem();
  }

  /**
   * Returns next sibling of the given `node`
   * @param node - Node
   */
  public getNextSibling(node: TNode): TNode | null {
    const nodeParent = this.getParentNode(node);

    return nodeParent ? this.getChildNodes(nodeParent).nextItem(node) : null;
  }

  /**
   * Returns root node of the provided `node`
   * @param node - Node
   */
  public getOwnerRoot(node: TNode): TRoot {
    return this.getNode(node).ownerRoot;
  }

  /**
   * Returns node of the given `node`
   * @param node - Node
   */
  public getParentNode(node: TNode): TNode | null {
    return this.getNode(node).parentNode;
  }

  /**
   * Returns previous sibling of the given `node`
   * @param node - Node
   */
  public getPreviousSibling(node: TNode): TNode | null {
    const nodeParent = this.getParentNode(node);

    return nodeParent
      ? this.getChildNodes(nodeParent).previousItem(node)
      : null;
  }

  /**
   * Associate the given `ownerRoot` to the provided `node`
   * @param node - Node
   * @param ownerRoot - Root node
   */
  public setOwnerRoot<T extends TNode>(node: T, ownerRoot: TRoot): T {
    return this.updateNode(node, { ownerRoot });
  }

  /**
   * Associate the given `node` to the provided `node`
   * @param node - Node
   * @param parentNode - Node
   */
  public setParentNode<T extends TNode>(node: T, parentNode: TNode): T {
    return this.updateNode(node, { parentNode });
  }

  /**
   * Returns properties associated to the given `node`
   * @param node - Node
   */
  protected getNode(node: TNode): TreeNodeStorePropsInterface<TNode, TRoot> {
    return this.propsMap.get(node);
  }

  /**
   * Associate the given `nodeProps` to the provided `node`
   * @param node - Node
   * @param nodeProps - Node props
   */
  protected setNode<T extends TNode>(
    node: T,
    nodeProps: TreeNodeStorePropsInterface<TNode, TRoot>
  ): T {
    return this.propsMap.set(node, nodeProps);
  }

  /**
   * Updates associated to the given `nodeProps` properties
   * @param node - Node
   * @param nodeProps - Node props
   */
  protected updateNode<T extends TNode>(
    node: T,
    nodeProps: Partial<TreeNodeStorePropsInterface<TNode, TRoot>>
  ): T {
    return this.setNode(node, Object.assign(this.getNode(node), nodeProps));
  }
}
