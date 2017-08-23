import { InvariableArray } from "../invariable";

export function isArrayLike(props, propName, componentName) {
    const propValue = props[propName];

    if (!Array.isArray(propValue) && !(propValue instanceof InvariableArray)) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + componentName
            + "`. `Array` or `InvariableArray` expected.");
    }
}
