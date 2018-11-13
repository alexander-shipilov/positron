import { classNames } from "../classNames";
import { modifiers } from "./modifiers";

export function bem(className, mods = null, ...other) {
  return classNames(className, modifiers(className, mods), ...other);
}
