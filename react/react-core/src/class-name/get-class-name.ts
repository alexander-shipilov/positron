import type { ClassName } from "./class-name";
import { CLASS_NAME_PROP } from "./class-name-prop";
import { isClassNameProps } from "./is-class-name-props";

/**
 * Function {@link getClassName} returns the value of `className` property.
 *
 * @param props - Props to get `className`
 *
 * @returns Class name or `null` if `className` is not defined or is not valid
 *   {@link ClassName}
 *
 * @public
 */
export function getClassName<TProps>(props: TProps): ClassName | null {
  return isClassNameProps(props) ? props[CLASS_NAME_PROP] : null;
}
