import type { Nullable } from "@positron/lang";

import type { TomAvlNodeProps } from "./tom-avl-node-props";
import { assertHeight } from "./assert-height";
import { TomNode } from "./tom-node";

export class TomAvlNode<TValue = unknown>
  extends TomNode<TValue>
  implements TomAvlNodeProps
{
  declare protected _height?: number;

  public get balanceFactor(): number {
    return this.leftHeight - this.rightHeight;
  }

  public get height(): number {
    return this._height ?? 1;
  }

  protected get leftHeight(): number {
    return this._left?.height ?? 0;
  }

  protected get rightHeight(): number {
    return this._right?.height ?? 0;
  }

  public balance(): this {
    return this.balanceFactor >= 2
      ? this._assertNode(this.right).balanceFactor > 0
        ? this.rotateLeftRight().balance()
        : this.rotateLeft().balance()
      : this.balanceFactor <= -2
        ? this._assertNode(this.left).balanceFactor < 0
          ? this.rotateRightLeft().balance()
          : this.rotateRight().balance()
        : this;
  }

  protected _getUpdateProps(
    left: Nullable<this>,
    right: Nullable<this>,
  ): TomAvlNodeProps {
    return {
      height:
        Math.max((left?.height ?? 0) + 1, (right?.height ?? 0) + 1) -
        this.height,
    };
  }

  protected _setChildren(left: Nullable<this>, right: Nullable<this>): this {
    const props = this._getUpdateProps(left, right);

    if (this._shouldUpdate(props)) {
      let node: Nullable<this> = this._assertNode(this);

      while (node) {
        node._update(props);
        node = node._parent;
      }
    }

    return super._setChildren(left, right);
  }

  protected _setHeight(height: number): this {
    if (height !== this.height) {
      if (height === 0) {
        delete this._height;
      } else {
        this._height = assertHeight(height);
      }
    }

    return this;
  }

  protected _shouldUpdate(props: TomAvlNodeProps): boolean {
    return props.height !== 0;
  }

  protected _update(props: TomAvlNodeProps) {
    if (props.height !== 0) {
      this._setHeight(this.height + props.height);
    }
  }
}
