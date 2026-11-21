import type { CssNumericValue } from "@positron/css-numeric";

import type { NumericValue } from "../numeric-value";

export interface NumericRegistry<
  TValue extends CssNumericValue,
  TObject extends NumericValue,
> {
  get($this: TValue, creator: () => TObject): TObject;
  set($this: TValue): TObject;
}
