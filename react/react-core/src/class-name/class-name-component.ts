import type { PartialOptional } from "@positron/core";

import type { ReactComponent } from "../react-component";

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
