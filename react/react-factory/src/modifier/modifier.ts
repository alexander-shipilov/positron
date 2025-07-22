import type { Described } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierMeta } from "./modifier-meta";
import type { ModifierTarget } from "./modifier-target";

/**
 * The {@link Modifier} type adds a modifier descriptor to the specified
 * `TValue`.
 *
 *  type PanelProps = {
 *    status: Modifier<"disabled" | "enabled">;
 *  };
 * ```
 *
 * @public
 */
export type Modifier<
  TTarget extends ModifierTarget,
  TMeta extends DescriptorMeta = never,
> = Described<TTarget, ModifierDescriptor<ModifierMeta & TMeta>>;
