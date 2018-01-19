import { ImmutableArray } from "positron-immutable";

export function isArrayLike(props, propName, componentName) {
    const propValue = props[propName];

    if (propValue != null && !Array.isArray(propValue) && !(propValue instanceof ImmutableArray)) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + componentName
            + "`. `Array` or `ImmutableArray` expected.");
    }
}
