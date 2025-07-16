import type { TreeList } from "./tree-list";

export interface TreeStore<TValue> {
  appendChild(value: TValue, parentValue: TValue): void;

  children(value: TValue): TreeList<TValue>;

  insertBefore(value: TValue, parentValue: TValue, beforeValue: TValue): void;

  parent(value: TValue): TValue | undefined;

  removeChild(parentValue: TValue, value: TValue): Node;

  replaceChild(parentValue: TValue, value: TValue, toValue: TValue): Node;
}
