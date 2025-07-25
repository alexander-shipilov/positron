import { isObject, isOwnPropertyOf } from "@positron/core";

import type { ClassNameProps } from "./class-name-props";
import { CLASS_NAME_PROP } from "./class-name-prop";
import { isClassName } from "./is-class-name";

/**
 * Function {@link isClassNameProps} checks if the passed `maybeClassNameProps`
 * is a properties with defined {@link ClassName}
 *
 * @param maybeClassNameProps - The value to check
 *
 * @public
 */
export function isClassNameProps(
  maybeClassNameProps: unknown,
): maybeClassNameProps is ClassNameProps {
  return (
    isObject(maybeClassNameProps) &&
    isOwnPropertyOf(CLASS_NAME_PROP, maybeClassNameProps) &&
    isClassName(maybeClassNameProps[CLASS_NAME_PROP])
  );
}
