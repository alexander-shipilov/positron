import type { Descriptor } from "../descriptor";

import type { DescribedNominal } from "./described-nominal";
import type { DescribedTarget } from "./described-target";

/**
 * The {@link Described} type represents described value.
 *
 * @typeParam TValue - The value to be described
 * @typeParam TDescriptor - The descriptor described the value
 *
 * @public
 */
export type Described<
  TTarget extends DescribedTarget,
  TDescriptor extends Descriptor = Descriptor,
> = DescribedNominal<TDescriptor> & TTarget;
