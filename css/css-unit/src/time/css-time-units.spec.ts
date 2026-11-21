import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssTimeUnits } from "./css-time-units";

describe("const CssTimeUnits", () => {
  unitSetTests(CssTimeUnits, [CssUnit.ms, CssUnit.s], [CssUnit.hz, CssUnit.px]);
});
