import type { DescribedTarget } from "../described";

import type { ModifierValue } from "./modifier-value";

/**
 * The {@link ModifierTarget} type represents a value that can be described by
 * the {@link ModifierDescriptor}
 *
 * @public
 */
export type ModifierTarget = DescribedTarget<ModifierValue>;
