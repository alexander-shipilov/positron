import type {
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { SerializeMathOpts } from "./serialize-math-opts";
import type { SerializeOpts } from "./serialize-opts";
import type { SerializeUnitValueOpts } from "./serialize-unit-value-opts";

export interface SerializerImpl {
  serialize($this: CssNumericValue, opts?: SerializeOpts): string;

  serializeMathValue(
    $this: CssMathValue, //
    opts?: SerializeMathOpts,
  ): string;

  serializeUnitValue(
    $this: CssUnitValue, //
    opts?: SerializeUnitValueOpts,
  ): string;
}
