import type { StringLike } from "@positron/lang";

import type { SpecLiteralArgs } from "./spec-literal";
import { SpecEntityType } from "./spec-entity";
import { SpecLiteral } from "./spec-literal";

/**
 * @public
 */
export class SpecCode extends SpecLiteral<SpecEntityType.Code, StringLike> {
  /**
   * @param args - Arguments to pass to the {@link (SpecLiteral:constructor)}
   *   constructor
   */
  public constructor(...args: SpecLiteralArgs<StringLike>) {
    super(SpecEntityType.Code, ...args);
  }
}
