import type { PartialOptional } from "@positron/lang";

import type {
  ReactComponent
} from "../../../../react/shared/src/react-component";

import type { ClassNameProps } from "./class-name-props";

/**
 * The {@link ClassNameComponent} represents a component that can accept class
 * name property.
 *
 * @public
 */
export type ClassNameComponent<TProps = never> = ReactComponent<
  PartialOptional<ClassNameProps> & TProps
>;
