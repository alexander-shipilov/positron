import { ORIENTATION_HORIZONTAL } from "positron-core/src/constants/orientations";

export class filterScrollProps {
    get clientSize() {
        return this.el["client" + this.measure];
    }

    get scrollPos() {
        return this.el["scroll" + this.position];
    }

    set scrollPos(scrollPos) {
        this.el["scroll" + this.position] = scrollPos;
    }

    get scrollSize() {
        return this.el["scroll" + this.measure];
    }

    get scrollState() {
        const { clientSize, scrollSize } = this;

        return clientSize >= scrollSize ? null : { clientSize, scrollSize, scrollPos: this.scrollPos };
    }

    constructor(el, orientation) {
        const isHorizontal = orientation === ORIENTATION_HORIZONTAL;

        this.el = el;
        this.measure = isHorizontal ? "Width" : "Height";
        this.position = isHorizontal ? "Left" : "Top";
    }
}
