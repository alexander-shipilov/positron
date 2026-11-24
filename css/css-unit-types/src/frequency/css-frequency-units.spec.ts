import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssFrequencyUnits } from "./css-frequency-units";

describe("const CssFrequencyUnits", () => {
  unitSetTests(
    CssFrequencyUnits,
    [CssUnit.hz, CssUnit.khz],
    [CssUnit.px, CssUnit.s],
  );
});
