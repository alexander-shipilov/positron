import type { Nullish } from "@positron/core";

import type { EntityValue } from "../entity";

/**
 *
 * @public
 */
export type UnaryOperationResolver<TValue extends EntityValue> = (
  arg: TValue,
) => Nullish<TValue>;
