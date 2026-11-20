import type { EntityObject } from "./entity-object";
import type { FormatContext } from "./format-context";

export interface Formatter {
  format(entity: EntityObject, context: FormatContext): string;
}
