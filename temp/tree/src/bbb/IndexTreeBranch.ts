export class Tree {
  constructor() {}
}

export class IndexMap<Item extends object> extends Map<Item, number> {
  protected readonly tree: number[] = [0];

  constructor(protected readonly pageSize: number) {
    super();
  }

  protected isIndex(index: number): boolean {
    return index >= 0 && index < this.size && Number.isInteger(index);
  }

  protected getTreeIndex(index: number): number {
    let treeIndex = -1;

    if (this.isIndex(index)) {
      const { tree } = this;

      let currTreeIndex = 1;
      let currIndex = index;

      while (tree[currTreeIndex - 1] > 0) {
        treeIndex = currTreeIndex;

        if (tree[currTreeIndex - 1] < currIndex) {
          currIndex -= tree[currTreeIndex - 1];
          currTreeIndex += 1;
        }

        currTreeIndex <<= 1;
      }
    }

    return treeIndex;
  }

  indexOf(item: Item): number {
    let index = this.get(item) ?? -1;

    if (index >= 0) {
      const { pageSize, tree } = this;
      let treeIndex = (index >> pageSize) - 1;

      while (treeIndex > 0) {
        if ((treeIndex & 1) === 0) {
          index += tree[treeIndex - 1];
        }

        treeIndex >>= 1;
      }
    }

    return index;
  }
}
