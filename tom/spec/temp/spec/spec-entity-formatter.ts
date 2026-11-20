import type { SpecEntity } from "./spec-entity/spec-entity";

export interface SpecEntityFormatter {
  format(entity: SpecEntity): string;
}
