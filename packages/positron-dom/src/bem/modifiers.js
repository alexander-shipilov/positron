import { forEach, toKebabCase, warning } from "positron-core";
import { classNames } from "../classNames";

function modifier(className, modName, modValue) {
    let modClass;

    modName = toKebabCase(modName);

    if (modName === "") {
        warning("Invalid modifier");
    } else if (modValue !== "" && modValue !== false && modValue != null) {
        modName = className + "_" + modName;

        if (modValue === true) {
            modClass = modName;
        } else {
            modValue = toKebabCase(String(modValue));

            if (modValue === "") {
                warning("Invalid modifier value");
            } else {
                modClass = modName + "_" + modValue;
            }
        }
    }

    return modClass;
}

export function modifiers(className, modifiers) {
    const classes = [];

    className = String(className);

    if (className === "") {
        warning("Invalid class");
    } else if (modifiers != null) {
        forEach(modifiers, (modValue, modName) => {
            const modClass = modifier(className, modName, modValue);

            if (modClass) {
                classes.push(modClass);
            }
        });
    }

    return classes.length ? classNames(classes) : "";
}
