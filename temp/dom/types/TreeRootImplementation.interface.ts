import { TreeNodeImplementationInterface } from "./TreeNodeImplementation.interface";

export interface TreeRootImplementationInterface<
  TNode,
  TRoot extends TNode,
  TFragment extends TNode
> extends TreeNodeImplementationInterface<TNode> {
  /**
   * https://dom.spec.whatwg.org/#dom-document-adoptnode
   *
   * @param root - Root
   * @param node - Node
   */
  adoptNode<T extends TNode>(root: TRoot, node: T): T;

  /**
   * Creates fragment
   * @param root - Root
   * @param host - Host
   */
  createFragment(root: TRoot, host: TNode | null): TFragment;

  /**
   * Creates node
   * @param root - Root
   */
  createNode(root: TRoot): TNode;

  /**
   * https://dom.spec.whatwg.org/#dom-document-importnode
   *
   * @param root - Root
   * @param node - Node
   */
  importNode(root: TRoot, node: TNode): TNode;
}
