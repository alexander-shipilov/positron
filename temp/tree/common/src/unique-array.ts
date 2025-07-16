export class UniqueArray<TItem> extends Array<TItem> {
  protected indexes: [number, number][];

  constructor(...items: TItem[]) {
    super();

    this.indexes = [];
    this.push(...items);
  }

  push(...items: TItem[]): number {}
}
