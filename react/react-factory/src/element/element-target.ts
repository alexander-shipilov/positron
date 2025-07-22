import type { DescribedTarget } from "../described";

import type { ElementValue } from "./element-value";

/**
 * The {@link ElementTarget} type represents a value that can be described by
 * the {@link ElementDescriptor}
 *
 * @public
 */
export type ElementTarget = DescribedTarget<ElementValue>;
