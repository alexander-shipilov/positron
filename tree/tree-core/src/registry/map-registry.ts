import type { TreeItem, TreeRegistry } from "../core";

import { isUndefined } from "@positron/core";

export class MapRegistry<TItem extends TreeItem, TData> implements TreeRegistry<
  TItem,
  TData
> {
  /**
   * @param map - The map-like object to store data
   * @param create - The function to create registry item.
   */
  constructor(
    protected readonly map: {
      get(item: TItem): TData | undefined;
      set(item: TItem, data: TData): void;
    },
    protected readonly create: () => TData,
  ) {}

  /**
   * @param item
   */
  get(item: TItem): TData {
    let data = this.map.get(item);

    if (isUndefined(data)) {
      data = this.create();
      this.map.set(item, data);
    }

    return data;
  }
}
