import { hasOwnProperty, isObject } from "@positron/core";

import type { ClassNameProps } from "./class-name-props";
import { CLASS_NAME_PROP } from "./class-name-prop";
import { isClassName } from "./is-class-name";

/**
 * @public
 * Function {@link isClassNameProps} checks if the passed `maybeClassNameProps`
 * is a properties with defined {@link ClassName}
 *
 * @param maybeClassNameProps - The value to check
 */
export function isClassNameProps(
  maybeClassNameProps: unknown,
): maybeClassNameProps is ClassNameProps {
  return (
    isObject(maybeClassNameProps) &&
    hasOwnProperty(maybeClassNameProps, CLASS_NAME_PROP) &&
    isClassName(maybeClassNameProps[CLASS_NAME_PROP])
  );
}
