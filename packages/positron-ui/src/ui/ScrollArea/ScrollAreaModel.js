import { ORIENTATION_HORIZONTAL, ORIENTATION_VERTICAL } from "positron-core/constants/orientations";
import { InvariableObject } from "positron-core/invariable";
import { ScrollBarModel } from "./ScrollBarModel";
import { filterScrollProps } from "./filterScrollProps";

export class ScrollAreaModel extends InvariableObject {
    valueOf() {
        return Object.assign(super.valueOf(), {
            [ORIENTATION_HORIZONTAL]: this[ORIENTATION_HORIZONTAL],
            [ORIENTATION_VERTICAL]: this[ORIENTATION_VERTICAL]
        });
    }

    static getClientSize(el, orientation) {
        return new filterScrollProps(el, orientation).clientSize;
    }

    static setScrollPos(el, orientation, scrollPos) {
        new filterScrollProps(el, orientation).scrollPos = scrollPos;
    }

    static getScrollState(el) {
        return {
            [ORIENTATION_HORIZONTAL]: new filterScrollProps(el, ORIENTATION_HORIZONTAL).scrollState,
            [ORIENTATION_VERTICAL]: new filterScrollProps(el, ORIENTATION_VERTICAL).scrollState
        };
    }
}

ScrollAreaModel.defineTypedProperty({
    [ORIENTATION_HORIZONTAL]: ScrollBarModel,
    [ORIENTATION_VERTICAL]: ScrollBarModel
});
