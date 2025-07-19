import type { PartialOptional } from "@positron/core";

import type { ReactComponent } from "../component";
import type { ReactProps } from "../props";

import type { ClassNameProps } from "./class-name-props";

/**
 * The {@link ClassNameComponent} represents a component that can accept class
 * name property.
 */
export type ClassNameComponent<TProps extends ReactProps = never> =
  ReactComponent<PartialOptional<ClassNameProps> & TProps>;
