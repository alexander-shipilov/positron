import type { ModifierMeta } from "./modifier-meta";

export type ModifierDescriptorData<TMeta extends ModifierMeta> = {
  readonly meta: TMeta;
};
