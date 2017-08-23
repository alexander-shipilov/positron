// @flow

import { Base } from "../Base";
import { compact, forEach } from "../object";

import type { AlignProps, AlignSide, AlignTargetSide } from "./AlignProps";
import { Bounds, BoundsProps, BoundsStyle } from "./Bounds";
import { Rect, RectProps, RectStyle } from "./Rect";
import { add, Coord, sub, toStyle } from "./utils";

export interface BoundedRectProps extends RectProps, BoundsProps {
}

export interface BoundedRectStyle extends RectStyle, BoundsStyle {
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

    init(...props: BoundedRectLike[]) {
        const { left, top, right, bottom, width, height } = compact(...props);

        this.define({
            bounds: new Bounds({ left, top, right, bottom }),
            rect: new Rect({ width, height })
        });
    }

    align(rect: Rect, props: AlignProps): Bounds {
        const center = Bounds.centerOf(this);
        const rectCenter = Bounds.centerOf(rect);

        const bounds: Object = {};

        forEach(props, (toSide: AlignTargetSide, side: AlignSide) => {
            if (side === "center" && toSide === "center") {
                Object.assign(bounds, {
                    left: add(this.left, sub(center.left, rectCenter.left)),
                    top: add(this.top, sub(center.top, rectCenter.top)),
                    right: add(this.right, sub(center.right, rectCenter.right)),
                    bottom: add(this.bottom, sub(center.bottom, rectCenter.bottom))
                });
            } else if (side === "center") {
                if (toSide === "horizontal") {
                    bounds.left = add(this.left, sub(center.left, rectCenter.left));
                    bounds.right = add(this.right, sub(center.right, rectCenter.right));
                } else if (toSide === "vertical") {
                    bounds.top = add(this.top, sub(center.top, rectCenter.top));
                    bounds.bottom = add(this.bottom, sub(center.bottom, rectCenter.bottom));
                } else {
                    bounds[toSide] = sub(this[toSide], rectCenter[toSide]);
                }
            } else if (toSide === "center") {
                bounds[side] = add(this[side], center[side]);
            } else if (side !== toSide) {
                bounds[side] = add(this[side], toSide === "left" || toSide === "right" ? this.width : this.height);
            } else {
                bounds[side] = this[side];
            }
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

    static fromElement(el: HTMLElement, toEl: HTMLElement): BoundedRect {
        return new BoundedRect(Rect.fromElement(el), Bounds.fromElement(el, toEl));
    }
}

export type BoundedRectLike = BoundedRect | BoundedRectProps;
