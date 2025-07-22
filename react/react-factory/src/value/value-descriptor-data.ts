import type { ValueMeta } from "./value-meta";

export type ValueDescriptorData<TMeta extends ValueMeta> = {
  meta: TMeta;
};
