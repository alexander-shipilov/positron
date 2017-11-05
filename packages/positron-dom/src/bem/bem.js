import classnames from "classnames";
import { modifiers } from "./modifiers";

export function bem(className, mods = null, ...other) {
    return classnames(className, modifiers(className, mods), ...other);
}
