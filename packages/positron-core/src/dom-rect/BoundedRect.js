// @flow

import { Base } from "../Base";
import { compact, forEach } from "../object";

import type { AlignProps, AlignSide, AlignTargetSide } from "./AlignProps";
import type { BoundsProps, BoundsStyle } from "./Bounds";
import { Bounds } from "./Bounds";
import type { RectProps, RectStyle } from "./Rect";
import { Rect } from "./Rect";
import type { Coord } from "./_utils";
import { add, sub, toStyle } from "./_utils";

export interface BoundedRectProps extends RectProps, BoundsProps {
}

export interface BoundedRectStyle extends RectStyle, BoundsStyle {
}

function alignSideToCenter(target, side, targetCenter, toCenter) {
    const bounds = {};

    if (side === "center") {
        Object.assign(bounds, {
            left: add(target.left, sub(targetCenter.left, toCenter.left)),
            top: add(target.top, sub(targetCenter.top, toCenter.top)),
            right: add(target.right, sub(targetCenter.right, toCenter.right)),
            bottom: add(target.bottom, sub(targetCenter.bottom, toCenter.bottom))
        });
    } else {
        bounds[side] = add(target[side], targetCenter[side]);
    }

    return bounds;
}

function alignCenterToSide(target, toSide, targetCenter, toCenter) {
    const bounds = {};

    if (toSide === "horizontal") {
        bounds.left = add(target.left, sub(targetCenter.left, toCenter.left));
        bounds.right = add(target.right, sub(targetCenter.right, toCenter.right));
    } else if (toSide === "vertical") {
        bounds.top = add(target.top, sub(targetCenter.top, toCenter.top));
        bounds.bottom = add(target.bottom, sub(targetCenter.bottom, toCenter.bottom));
    } else {
        bounds[toSide] = sub(target[toSide], toCenter[toSide]);
    }

    return bounds;
}

function alignSideToSide(target, side, toSide) {
    const bounds = {};

    if (side !== toSide) {
        bounds[side] = add(target[side], toSide === "left" || toSide === "right" ? target.width : target.height);
    } else {
        bounds[side] = target[side];
    }

    return bounds;
}

export class BoundedRect extends Base {
    get left(): Coord {
        return this.bounds.left;
    }

    get top(): Coord {
        return this.bounds.top;
    }

    get right(): Coord {
        return this.bounds.right;
    }

    get bottom(): Coord {
        return this.bounds.bottom;
    }

    get width(): Coord {
        return this.rect.width;
    }

    get height(): Coord {
        return this.rect.height;
    }

    constructor(...props: BoundedRectLike[]) {
        const { left, top, right, bottom, width, height } = compact(...props);

        super({
            bounds: new Bounds({ left, top, right, bottom }),
            rect: new Rect({ width, height })
        });
    }

    align(to: Rect, props: AlignProps): Bounds {
        const center = Bounds.centerOf(this.rect);
        const toCenter = Bounds.centerOf(to);
        const bounds: Object = {};

        forEach(props, (toSide: AlignTargetSide, side: AlignSide) => {
            let nextBounds;

            if (toSide === "center") {
                nextBounds = alignSideToCenter(this, side, center, toCenter);
            } else if (side === "center") {
                nextBounds = alignCenterToSide(this, toSide, center, toCenter);
            } else {
                nextBounds = alignSideToSide(this, side, toSide);
            }

            Object.assign(bounds, nextBounds);
        });

        return new Bounds(bounds);
    }

    toStyle(): BoundedRectStyle {
        const { left, top, right, bottom, width, height } = this;

        return {
            left: toStyle(left),
            top: toStyle(top),
            right: toStyle(right),
            bottom: toStyle(bottom),
            width: toStyle(width),
            height: toStyle(height)
        };
    }

    valueOf(): BoundedRectProps {
        return this.pick("left", "top", "right", "bottom", "width", "height");
    }

    static fromElement(el: Element, toEl: Element): BoundedRect {
        return new BoundedRect(Rect.fromElement(el), Bounds.fromElement(el, toEl));
    }
}

export type BoundedRectLike = BoundedRect | BoundedRectProps;
