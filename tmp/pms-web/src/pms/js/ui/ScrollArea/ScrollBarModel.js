import { ImmutableObject } from "positron-immutable";

export class ScrollBarModel extends ImmutableObject {
    get relativePos() {
        const { scrollSize, scrollPos } = this;

        return scrollSize === 0 ? 0 : scrollPos / scrollSize;
    }

    get relativeSize() {
        const { clientSize, scrollSize } = this;

        return scrollSize === 0 ? 0 : clientSize / scrollSize;
    }

    constructor(args) {
        super({ clientSize: 0, scrollSize: 0, scrollPos: 0 }, ...args);
    }
}
