import { isImplementationOf } from "positron-core";

export function isClass(...types) {
    return (props, propName, componentName) => {
        if (!isImplementationOf(props[propName], ...types)) {
            return new Error("Invalid prop `" + propName + "` supplied to `" + componentName
                + "`. " + types.join(" and ") + " expected.");
        }
    };
}
