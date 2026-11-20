import type { SpecEntityType } from "./spec-entity/spec-entity-type";

/**
 *
 */
export type SpecMemberType =
  | SpecEntityType.Index
  | SpecEntityType.Method
  | SpecEntityType.Property;
