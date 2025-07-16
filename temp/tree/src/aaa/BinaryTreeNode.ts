abstract class TN<TV> {
  abstract count: number;

  protected parent: TN<TV> | null = null;

  abstract item(n: number): TV | null

  replace(node: TN<TV>): TN<TV> {
    const delta = node.count - this.count;

    node.parent = this.parent;
    this.parent = null;

    if (delta) {
      let { parent } = node;

      while (parent != null) {
        parent.count += delta;
        parent = parent.parent;
      }
    }

    return node;
  }
}

class TB<TV> extends TN<TV> {
  parent: TN<TV> | null = null;

  count: number;

  constructor(
    protected left: TN<TV>,
    protected right: TN<TV>
  ) {
    super();
    this.count = left.count + right.count;
  }


  setLeft(nextLeft: TN<TV>) {
    if (nextLeft !== this.left) {
      this.left = this.left.replace(nextLeft);
    }
  }

  setRight(nextRight: TN<TV>) {
    const { right } = this;

    if (nextRight !== right) {
      this.right = this.left.replace(nextRight);
    }
  }

  item(n: number): TV | null {
    return n < 0 ? null : n < this.left.count ? this.left.item(n) : this.right.item(n - this.left.count);
  }
}

class TL<TV> extends TN<TV> {
  parent: TN<TV> | null = null;

  constructor(readonly items: TV[] = []) {
    super();
  }

  get count() {
    return this.items.length;
  }

  set count(n: number) {
    throw new Error("Unsupported");
  }

  item(n: number): TV | null {
    return this.items[n] ?? null;
  }
}

class T<TV> {
  readonly root: TN<TV>;

  constructor(readonly pageSize = 0) {
    this.root = new TL<TV>();
  }
}
