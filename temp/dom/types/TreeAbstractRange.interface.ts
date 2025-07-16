/**
 * Objects implementing the `TreeAbstractRangeInterface` interface are known as
 * ranges.
 */
export interface TreeAbstractRangeInterface<TNode> {
  readonly collapsed: boolean;

  readonly endContainer: TNode;

  readonly endOffset: number;

  readonly startContainer: TNode;

  readonly startOffset: number;
}
