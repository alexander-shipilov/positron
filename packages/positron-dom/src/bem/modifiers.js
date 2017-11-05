import classnames from "classnames";
import { warning, forEach, toKebabCase } from "positron-core";

export function modifiers(className, modifiers = null) {
    const classNames = [];

    className = String(className);
    if (className === "") {
        warning("invalid class");
    } else if (modifiers !== null) {
        forEach(modifiers, (value, modifier) => {
            modifier = toKebabCase(modifier);

            if (modifier === "") {
                warning("invalid modifier");
            } else if (value !== "" && value !== false && value !== null && value !== void 0) {
                modifier = className + "_" + modifier;

                if (value === true) {
                    classNames.push(modifier);
                } else {
                    value = toKebabCase(String(value));

                    if (value === "") {
                        warning("invalid value");
                    } else {
                        classNames.push(modifier + "_" + value);
                    }
                }
            }
        });
    }

    return classNames.length ? classnames(classNames) : "";
}
