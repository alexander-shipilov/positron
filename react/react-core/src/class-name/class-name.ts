import type { Nominal } from "@positron/nominal";

import type { ClassNameType } from "./class-name-type";

/**
 * The {@link ClassName} type describes a defined value of `className` property.
 * It should be a non-empty string.
 *
 * @public
 */
export type ClassName = Nominal<string, ClassNameType>;
