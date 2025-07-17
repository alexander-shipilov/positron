import type { ClassName } from "./class-name";
import type { CLASS_NAME_PROP } from "./class-name-prop";

/**
 * The {@link ClassNameProps} interface describes a properties with defined
 * `className`
 *
 * @public
 */
export interface ClassNameProps {
  [CLASS_NAME_PROP]: ClassName;
}
