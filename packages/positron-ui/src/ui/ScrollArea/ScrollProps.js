import { ORIENTATION_HORIZONTAL } from "positron-core/constants/orientations";

export class filterScrollProps {
    constructor(el, orientation) {
        const isHorizontal = orientation === ORIENTATION_HORIZONTAL;

        this.el = el;
        this.measure = isHorizontal ? "Width" : "Height";
        this.position = isHorizontal ? "Left" : "Top";
    }

    get clientSize() {
        return this.el["client" + this.measure];
    }

    get scrollSize() {
        return this.el["scroll" + this.measure];
    }

    get scrollPos() {
        return this.el["scroll" + this.position];
    }

    set scrollPos(scrollPos) {
        this.el["scroll" + this.position] = scrollPos;
    }

    get scrollState() {
        const { clientSize, scrollSize } = this;

        return clientSize >= scrollSize ? null : { clientSize, scrollSize, scrollPos: this.scrollPos };
    }
}
