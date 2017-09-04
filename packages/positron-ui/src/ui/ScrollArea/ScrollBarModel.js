import { InvariableObject } from "positron-core/src/invariable";

export class ScrollBarModel extends InvariableObject {
    get relativePos() {
        const { scrollSize, scrollPos } = this;

        return scrollPos / scrollSize;
    }

    get relativeSize() {
        const { clientSize, scrollSize } = this;

        return clientSize / scrollSize;
    }
}
