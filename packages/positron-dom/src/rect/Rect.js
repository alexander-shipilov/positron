// @flow

import { compact } from "positron-core";
import type { Coord } from "./_utils";
import { add, half, toStyle, validate } from "./_utils";
import type { PointProps, PointStyle } from "./Point";
import { Point } from "./Point";

export interface RectProps extends PointProps {
    width?: Coord,
    height?: Coord
}

export interface RectStyle extends PointStyle {
    width: string,
    height: string
}

function isBoth(val1, val2) {
    return val1 != null && val2 != null;
}

function containsSize(position, size, targetPosition, targetSize) {
    let isContain = targetPosition <= position + size;

    if (isContain && targetSize !== void 0) {
        isContain = targetPosition + targetSize <= position + size;
    }

    return isContain;
}

function contains(position, size, targetPosition, targetSize) {
    let isContain = true;

    if (isBoth(position, targetPosition)) {
        isContain = targetPosition >= position;

        if (isContain && size !== void 0) {
            isContain = containsSize(position, size, targetPosition, targetSize);
        }
    }

    return isContain;
}

function constrain(position, size, targetPosition, targetSize) {
    if (isBoth(position, targetPosition)) {
        targetPosition = Math.max(targetPosition, position);

        if (size !== void 0) {
            targetPosition = Math.min(targetPosition, position + size);

            if (targetSize !== void 0) {
                targetSize = Math.min(targetSize, position + size - targetPosition);
            }
        }
    } else if (isBoth(size, targetSize)) {
        targetSize = Math.min(targetSize, size);
    }

    return { position: targetPosition, size: targetSize };
}

export class Rect extends Point {
    set width(width: Coord) {
        if (!validate(width)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _width: width == null ? void 0 : Math.max(+width, 0) });
    }

    get width(): Coord {
        return this._width;
    }

    set height(height: Coord) {
        if (!validate(height)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _height: height == null ? void 0 : Math.max(+height, 0) });
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

    get square(): Coord {
        const { width, height } = this;

        return (width == null || height == null) ? void 0 : Number(width) * Number(height);
    }

    resizeTo(...props: RectLike[]): Rect {
        return this.assign(new Rect(...props).pick(["width", "height"]));
    }

    resizeBy(...props: RectLike[]): Rect {
        const { width, height } = compact(...props);

        return this.resizeTo({ width: add(this.width, width), height: add(this.height, height) });
    }

    contains(...props: RectLike[]): boolean {
        const rect = new Rect(...props);

        return contains(this.left, this.width, rect.left, rect.width)
            && contains(this.top, this.height, rect.top, rect.height);
    }

    constrain(...props: RectLike[]): Rect {
        const rect = new Rect(...props);

        const { position: left, size: width } = constrain(this.left, this.width, rect.left, rect.width);
        const { position: top, size: height } = constrain(this.top, this.height, rect.top, rect.height);

        return Rect.from({ left, top, width, height });
    }

    toStyle(): RectStyle {
        const { left, top, width, height } = this;

        return { left: toStyle(left), top: toStyle(top), width: toStyle(width), height: toStyle(height) };
    }

    valueOf(): RectProps {
        return this.pick(["left", "top", "width", "height"]);
    }

    static fromElement(el: Element, toEl: ?Element): Rect {
        const { width, height } = el.getBoundingClientRect();

        return new this(super.fromElement(el, toEl), { width, height });
    }

    static centerOf(...props: RectLike[]): Rect {
        const rect = new this(...props);

        return rect.moveBy({ left: half(rect.width), top: half(rect.height) }).resizeTo({ width: 0, height: 0 });
    }
}

export type RectLike = Rect | RectProps;
