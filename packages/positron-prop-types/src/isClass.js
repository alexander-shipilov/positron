import { isImplementationOf } from "positron-core";

export function isClass(...types) {
    return (props, propName, componentName) => {
        const value = props[propName];

        let error;
        if (value != null && !isImplementationOf(props[propName], ...types)) {
            error = new Error("Invalid prop `" + propName + "` supplied to `" + componentName
                + "`. " + types.map((type) => String(type)).join(" and ") + " expected.");
        }

        return error;
    };
}
