// @flow

import type { Coord } from "./_utils";
import { half, sub, toStyle, validate } from "./_utils";
import type { PointProps, PointStyle } from "./Point";
import { Point } from "./Point";
import type { RectLike } from "./Rect";
import { Rect } from "./Rect";

export interface BoundsProps extends PointProps {
    right?: Coord,
    bottom?: Coord
}

export interface BoundsStyle extends PointStyle {
    right: string,
    bottom: string
}

function constrain(from: Coord, target: Coord): Coord {
    return from === void 0 ? target : target === void 0 ? from : Math.max(from, target);
}

export class Bounds extends Point {
    set right(right: Coord) {
        if (!validate(right)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _right: right === null || right === void 0 ? void 0 : +right });
    }

    get right(): Coord {
        return this._right;
    }

    set bottom(bottom: Coord) {
        if (!validate(bottom)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _bottom: bottom === null || bottom === void 0 ? void 0 : +bottom });
    }

    get bottom(): Coord {
        return this._bottom;
    }

    invert() {
        const { top, left, right, bottom } = this;

        return this.assign({ left: sub(0, left), top: sub(0, top), right: sub(0, right), bottom: sub(0, bottom) });
    }

    resizeTo(...props: BoundsLike[]): Bounds {
        return this.assign(new Bounds(...props).pick(["left", "top", "right", "bottom"]));
    }

    resizeOut(...props: BoundsLike[]): Bounds {
        const { left, right, top, bottom } = new Bounds(...props);

        return this.resizeTo({
            left: sub(this.left, left),
            top: sub(this.top, top),
            right: sub(this.right, right),
            bottom: sub(this.bottom, bottom)
        });
    }

    resizeIn(...props: BoundsLike[]): Bounds {
        return this.resizeOut(new Bounds(...props).invert());
    }

    contourOut(...props: RectLike[]): Rect {
        const { left, top } = this;

        return new Rect(...props)
            .moveBy({ left: sub(0, left), top: sub(0, top) })
            .resizeBy({ width: left, height: top })
            .resizeBy({ width: this.right, height: this.bottom });
    }

    contourIn(...props: RectLike[]): Rect {
        return this.invert().contourOut(...props);
    }

    constrain(...props: BoundsLike[]): Bounds {
        const { left, top, right, bottom } = new Bounds(...props);

        return new Bounds({
            left: constrain(this.left, left),
            top: constrain(this.top, top),
            right: constrain(this.right, right),
            bottom: constrain(this.bottom, bottom)
        });
    }

    toStyle(): BoundsStyle {
        const { left, top, right, bottom } = this;

        return { left: toStyle(left), top: toStyle(top), right: toStyle(right), bottom: toStyle(bottom) };
    }

    valueOf(): BoundsProps {
        return this.pick(["left", "top", "right", "bottom"]);
    }

    static fromRect(rect: Rect, toRect: Rect): Bounds {
        return new this({
            left: sub(rect.left, toRect.left),
            top: sub(rect.top, toRect.top),
            right: sub(toRect.right, rect.right),
            bottom: sub(toRect.bottom, rect.bottom)
        });
    }

    static fromElement(el: Element, toEl: ?Element): Bounds {
        let toRect;

        if (toEl == null) {
            const { documentElement: { clientWidth, clientHeight } } = document;

            toRect = Rect.from({ left: 0, top: 0, width: clientWidth, height: clientHeight });
        } else {
            toRect = Rect.fromElement(toEl);
        }

        return this.fromRect(Rect.fromElement(el), toRect);
    }

    static centerOf(...props: RectLike[]): Bounds {
        const rect = new Rect(...props);
        const left = half(rect.width);
        const top = half(rect.height);

        return this.from({ left, top, right: left, bottom: top });
    }
}

export type BoundsLike = Bounds | BoundsProps;
