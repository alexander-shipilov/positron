import type { EntityType } from "./entity-type";

export type MemberEntityType =
  | EntityType.Call
  | EntityType.Indexer
  | EntityType.Method
  | EntityType.New
  | EntityType.Property;
