// @flow

import { compact, isDefined } from "../object";
import type { PointProps, PointStyle } from "./Point";
import { Point } from "./Point";
import { add, Coord, half, toStyle, validate } from "./utils";

export interface RectProps extends PointProps {
    width?: Coord,
    height?: Coord
}

export interface RectStyle extends PointStyle {
    width: string,
    height: string
}

export class Rect extends Point {
    set width(width: Coord) {
        if (!validate(width)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _width: isDefined(width) ? Math.max(+width, 0) : void 0 });
    }

    get width(): Coord {
        return this._width;
    }

    set height(height: Coord) {
        if (!validate(height)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _height: isDefined(height) ? Math.max(+height, 0) : void 0 });
    }

    get height(): Coord {
        return this._height;
    }

    get right(): Coord {
        return add(this.left, this.width);
    }

    get bottom(): Coord {
        return add(this.top, this.height);
    }

    resizeTo(...props: RectLike[]): Rect {
        return this.assign(new Rect(...props).pick("width", "height"));
    }

    resizeBy(...props: RectLike[]): Rect {
        const { width, height } = compact(...props);

        return this.resizeTo({ width: add(this.width, width), height: add(this.height, height) });
    }

    contains(...props: RectLike[]): boolean {
        const { left, top, width, height } = new Rect(...props);

        let contains = true;

        if (contains && left !== void 0 && this.left !== void 0) {
            contains = left >= this.left;

            if (contains && this.width !== void 0) {
                contains = left <= this.left + this.width;

                if (contains && width !== void 0) {
                    contains = left + width <= this.left + this.width;
                }
            }
        }

        if (contains && top !== void 0 && this.top !== void 0) {
            contains = top >= this.top;

            if (contains && this.height !== void 0) {
                contains = top <= this.top + this.height;

                if (contains && height !== void 0) {
                    contains = top + height <= this.top + this.height;
                }
            }
        }

        return contains;
    }

    constrain(...props: RectLike[]): Rect {
        let { left, top, width, height } = new Rect(...props);

        if (left !== void 0 && this.left !== void 0) {
            left = Math.max(left, this.left);

            if (this.width !== void 0) {
                left = Math.min(left, this.left + this.width);

                if (width !== void 0) {
                    width = Math.min(width, this.left + this.width - left);
                }
            }
        } else if (width !== void 0 && this.width !== void 0) {
            width = Math.min(width, this.width);
        }

        if (top !== void 0 && this.top !== void 0) {
            top = Math.max(top, this.top);

            if (this.height !== void 0) {
                top = Math.min(top, this.top + this.height);

                if (height !== void 0) {
                    height = Math.min(height, this.top + this.height - top);
                }
            }
        } else if (height !== void 0 && this.height !== void 0) {
            height = Math.min(height, this.height);
        }

        return Rect.from({ left, top, width, height });
    }

    toStyle(): RectStyle {
        const { left, top, width, height } = this;

        return { left: toStyle(left), top: toStyle(top), width: toStyle(width), height: toStyle(height) };
    }

    valueOf(): RectProps {
        return this.pick("left", "top", "width", "height");
    }

    static fromElement(el: ?HTMLElement, toEl: ?HTMLElement): Rect {
        const point = super.fromElement(el, toEl);
        const size = {};

        el = el || document.body;
        if (el) {
            const { width, height } = el.getBoundingClientRect();

            Object.assign(size, { width, height });
        }

        return new this(point, size);
    }

    static centerOf(rect: Rect) {
        return rect.moveBy({ left: half(rect.width), top: half(rect.height) }).resizeTo({ width: 0, height: 0 });
    }
}

export type RectLike = Rect | RectProps;
