import { ArrayLikeProxy } from "@positron/array";

import type { DomOrderedSet } from "../dom";

export class OrderedSet<TItem>
  extends ArrayLikeProxy<TItem>
  implements DomOrderedSet<TItem>
{
  protected readonly items: TItem[];

  /**
   * {@inheritDoc DomOrderedSet.size}
   */
  public get size(): number {
    return this.length;
  }

  public constructor(values: Iterable<TItem> = []) {
    const items: TItem[] = [];

    super(items);
    this.items = items;

    for (const value of values) {
      this.add(value);
    }
  }

  public add(value: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  public delete(value: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  public forEach(
    callback: (value: TItem, key: number, parent: OrderedSet<TItem>) => void,
    thisArg?: unknown,
  ): void {
    throw new Error("Method not implemented.");
  }

  public has(value: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  public insert(value: TItem, beforeValue: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  public item(index: number): TItem | undefined {
    throw new Error("Method not implemented.");
  }

  public keys(): Iterable<TItem> {
    throw new Error("Method not implemented.");
  }
}
