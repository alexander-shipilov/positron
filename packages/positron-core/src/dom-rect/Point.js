// @flow

import { InvariableObject } from "../invariable";
import { isDefined } from "../object";
import { add, Coord, sub, toStyle, validate } from "./utils";

export interface PointProps {
    left?: Coord,
    top?: Coord
}

export interface PointStyle {
    left: string,
    top: string
}

export class Point extends InvariableObject {
    set left(left: Coord) {
        if (!validate(left)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _left: isDefined(left) ? +left : void 0 });
    }

    get left(): Coord {
        return this._left;
    }

    set top(top: Coord) {
        if (!validate(top)) {
            throw this.getError("Invalid argument");
        }

        this.define({ _top: isDefined(top) ? +top : void 0 });
    }

    get top(): Coord {
        return this._top;
    }

    moveBy(...props: PointLike[]): Point {
        const { left, top } = new Point(...props);

        return this.moveTo({ left: add(this.left, left), top: add(this.top, top) });
    }

    moveTo(...props: PointLike[]): Point {
        return this.assign(new Point(...props).pick("left", "top"));
    }

    relativeTo(...props: PointLike[]): Point {
        const { left, top } = new Point(...props);

        return this.moveTo({ left: sub(this.left, left), top: sub(this.top, top) });
    }

    toStyle(): PointStyle {
        const { left, top } = this;

        return { left: toStyle(left), top: toStyle(top) };
    }

    valueOf(): PointProps {
        return this.pick("left", "top");
    }

    static fromElement(el: ?HTMLElement, toEl: ?HTMLElement): Point {
        let props;

        el = el || document.body;
        if (el) {
            const { left, top } = el.getBoundingClientRect();

            props = { left, top };
            if (toEl) {
                const rel = el.getBoundingClientRect();

                Object.assign(props, { left: left - rel.left, top: top - rel.top });
            }
        }

        return this.from(props);
    }

    static fromClientEvent(event) {
        return this.from({ left: event.clientX, top: event.clientY });
    }

    static fromScreenEvent(event) {
        return this.from({ left: event.screenX, top: event.screenY });
    }
}

export type PointLike = Point | PointProps;
