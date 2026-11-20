import type { ErrorMessage, Nullable, Nullish } from "@positron/lang";
import { assert } from "@positron/lang";

import type { TomIterator } from "../data3";
import { TomIteratorImpl } from "../data3";

import type { TomNodeTreeProps } from "./tom-node-tree-props";

export class TomNode<TValue> implements TomNodeTreeProps {
  declare protected _left?: this;

  declare protected _parent?: this;

  declare protected _right?: this;

  declare protected _value: TValue;

  public get isLeft(): boolean {
    return this._parent?._left === this;
  }

  public get isRight(): boolean {
    return this._parent?._right === this;
  }

  public get left(): Nullish<this> {
    return this._left ?? null;
  }

  public get parent(): Nullish<this> {
    return this._parent ?? null;
  }

  public get right(): Nullish<this> {
    return this._right ?? null;
  }

  public get value(): TValue {
    return this._value;
  }

  public constructor(value: TValue) {
    this._setValue(value);
  }

  public ancestors(): TomIterator<this> {
    return TomIteratorImpl.from(this._ancestors());
  }

  public descendants(): TomIterator<this> {
    return TomIteratorImpl.from(this._descendants(this));
  }

  public getLeftLeaf(): this {
    let leftLeaf = this._assertNode(this);

    while (leftLeaf._left) {
      leftLeaf = leftLeaf._left;
    }

    return leftLeaf;
  }

  public getRightLeaf(): this {
    let rightLeaf = this._assertNode(this);

    while (rightLeaf._right) {
      rightLeaf = rightLeaf._right;
    }

    return rightLeaf;
  }

  public getRoot(): this {
    let root = this._assertNode(this);

    while (root._parent) {
      root = root._parent;
    }

    return root;
  }

  public isAncestorOf(child: this): boolean {
    if (child._parent && (this._left || this._right)) {
      for (const node of child.ancestors()) {
        if (node === this) {
          return true;
        }
      }
    }

    return false;
  }

  public isDescendantOf(node: this): boolean {
    return node.isAncestorOf(this);
  }

  /**
   * `[L, a, [C, b, R]] --> [[L, a, C], b, R]`
   */
  public rotateLeft(): this {
    const a = this._assertNode(this);
    const b = this._assertNode(a.right, "Cannot rotate left, b expected");

    return b.setLeft(a.setRight(b.left));
  }

  /**
   * `[L, a [[M, c, N], b, R]] --> [[L, a, M], c, [N, b, R]]`
   */
  public rotateLeftRight(): this {
    const a = this._assertNode(this);
    const b = this._assertNode(a.right, "Cannot rotate left-right, b expected");
    const c = this._assertNode(b.left, "Cannot rotate left-right, c expected");

    return c.setChildren(a.setRight(c.left), b.setLeft(c.right));
  }

  /**
   * `[[L, b, C], a, R] --> [L, b, [C, a, R]]`
   */
  public rotateRight(): this {
    const a = this._assertNode(this);
    const b = this._assertNode(a._left, "Cannot rotate right, b expected");

    return b.setRight(a.setLeft(b.right));
  }

  /**
   * `[[L, b, [M, c, N]], a, R] --> [[L, b, M], c, [N, a, R]]`
   */
  public rotateRightLeft(): this {
    const a = this._assertNode(this);
    const b = this._assertNode(a.left, "Cannot rotate right-left, b expected");
    const c = this._assertNode(b.right, "Cannot rotate right-left, c expected");

    return c.setChildren(b.setRight(c.left), a.setLeft(c.right));
  }

  public setChildren(left: Nullable<this>, right: Nullable<this>): this {
    return this._setChildren(left, right);
  }

  public setLeft(left: Nullable<this>): this {
    return this._setChildren(left, this._right);
  }

  public setRight(right: Nullable<this>): this {
    return this._setChildren(this._left, right);
  }

  protected *_ancestors(): Generator<this> {
    let node = this._assertNode(this);

    while (node._parent) {
      node = node._parent;
      yield node;
    }
  }

  protected _assertDelete(child: Nullable<this>) {
    assert(child === this._left || child === this._right, "Hierarchy error");
  }

  protected _assertInsert(child: Nullable<this>) {
    assert(child !== this && !child?.isAncestorOf(this), "Hierarchy error");
  }

  protected _assertNode(
    maybeNode: Nullable<this>,
    message: ErrorMessage = "Node expected",
  ): this {
    return assert(maybeNode, message);
  }

  protected _deleteChild(child: this): this {
    this._assertDelete(child);

    if (this._left === child) {
      delete this._left;
    } else if (this._right === child) {
      delete this._right;
    }

    return this;
  }

  protected *_descendants(root: Nullable<this>): Generator<this> {
    if (this._left) {
      yield* this._left._descendants(root);
    }

    if (this !== root) {
      yield this;
    }

    if (this._right) {
      yield* this._right._descendants(root);
    }
  }

  protected _setChildren(left: Nullable<this>, right: Nullable<this>): this {
    if (left !== this.left || right !== this.right) {
      this._assertInsert(left);
      this._assertInsert(right);

      this._updateLeft(left);
      this._updateRight(right);
    }

    return this;
  }

  protected _setLeft(left: Nullable<this>): this {
    if (left !== this.left) {
      this._assertInsert(left);
      this._updateRight(left);
    }

    return this;
  }

  protected _setRight(right: Nullable<this>): this {
    if (right !== this.right) {
      this._assertInsert(right);
      this._updateRight(right);
    }

    return this;
  }

  protected _setValue(value: TValue) {
    this._value = value;
  }

  protected _updateLeft(left: Nullable<this>) {
    this._left?._updateParent(null);

    if (left == null) {
      delete this._left;
    } else {
      this._left = left._updateParent(this);
    }
  }

  protected _updateParent(parent: Nullable<this>): this {
    this._parent?._deleteChild(this);

    if (parent == null) {
      delete this._parent;
    } else {
      this._parent = parent;
    }

    return this;
  }

  /**
   *
   * @param right -
   */
  protected _updateRight(right: Nullable<this>) {
    this._right?._updateParent(null);

    if (right == null) {
      delete this._right;
    } else {
      this._right = right._updateParent(this);
    }
  }
}
