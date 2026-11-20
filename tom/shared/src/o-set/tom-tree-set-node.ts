import type { Nullable } from "@positron/lang";

import type { TomTreeSetNodeProps } from "./tom-tree-set-node-props";
import { assertSize } from "./assert-size";
import { TomAvlNode } from "./tom-avl-node";

export class TomTreeSetNode<TValue>
  extends TomAvlNode<TValue>
  implements TomTreeSetNodeProps
{
  declare protected _count?: number;

  public get count(): number {
    return this._count ?? 0;
  }

  protected get leftCount(): number {
    return this._left?._count ?? 0;
  }

  protected get rightCount(): number {
    return this._right?._count ?? 0;
  }

  public constructor(value: TValue, count: number = 0) {
    super(value);
    this._setCount(count);
  }

  protected _getUpdateProps(
    left: Nullable<this>,
    right: Nullable<this>,
  ): TomTreeSetNodeProps {
    return {
      ...super._getUpdateProps(left, right),
      count: 1 + (left?.count ?? 0) + (right?.count ?? 0) - this.count,
    };
  }

  protected _setCount(count: number): this {
    if (count !== this.count) {
      if (count === 0) {
        delete this._count;
      } else {
        this._count = assertSize(count);
      }
    }

    return this;
  }

  protected _shouldUpdate(props: TomTreeSetNodeProps): boolean {
    return props.count !== 0 || super._shouldUpdate(props);
  }

  protected _update(props: TomTreeSetNodeProps) {
    super._update(props);

    if (props.count !== 0) {
      this._setCount(this.count + props.count);
    }
  }
}
