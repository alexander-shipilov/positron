import { ORIENTATION_HORIZONTAL, ORIENTATION_VERTICAL } from "positron-core/src/constants/orientations";
import { InvariableObject } from "positron-core/src/invariable";
import { filterScrollProps } from "./filterScrollProps";
import { ScrollBarModel } from "./ScrollBarModel";

export class ScrollAreaModel extends InvariableObject {
    static getClientSize(el, orientation) {
        return new filterScrollProps(el, orientation).clientSize;
    }

    static getScrollState(el) {
        return {
            [ORIENTATION_HORIZONTAL]: new filterScrollProps(el, ORIENTATION_HORIZONTAL).scrollState,
            [ORIENTATION_VERTICAL]: new filterScrollProps(el, ORIENTATION_VERTICAL).scrollState
        };
    }

    static setScrollPos(el, orientation, scrollPos) {
        new filterScrollProps(el, orientation).scrollPos = scrollPos;
    }

    valueOf() {
        return Object.assign(super.valueOf(), {
            [ORIENTATION_HORIZONTAL]: this[ORIENTATION_HORIZONTAL],
            [ORIENTATION_VERTICAL]: this[ORIENTATION_VERTICAL]
        });
    }
}

ScrollAreaModel.defineTypedProperty({
    [ORIENTATION_HORIZONTAL]: ScrollBarModel,
    [ORIENTATION_VERTICAL]: ScrollBarModel
});
