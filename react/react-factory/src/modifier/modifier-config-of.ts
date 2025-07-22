import type { DescribedValueOf } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { Modifier } from "./modifier";
import type { ModifierConfig } from "./modifier-config";
import type { ModifierMeta } from "./modifier-meta";
import type { ModifierTarget } from "./modifier-target";

export type ModifierConfigOf<TTarget> =
  TTarget extends Modifier<
    infer Target extends ModifierTarget,
    infer Meta extends DescriptorMeta
  >
    ? ModifierConfig<DescribedValueOf<Target>, Meta & ModifierMeta>
    : never;
