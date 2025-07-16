import type { KeyOf } from "@positron/lang";

import type { SpecKey } from "./spec-key";

/**
 * Type {@link SpecKeyOf} describes a key of the passed `TTarget`
 *
 * @public
 */
export type SpecKeyOf<TTarget> = PropertyKeyOf<TTarget, SpecKey>;
