import type { ValueMeta } from "./value-meta";

export type ValueConfig<TValue, TMeta extends ValueMeta> = {
  readonly meta: TMeta;
  readonly value: TValue;
};
