import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssAngleUnits } from "./css-angle-units";

describe("const CssAngleUnits", () => {
  unitSetTests(
    CssAngleUnits,
    [CssUnit.deg, CssUnit.grad, CssUnit.rad, CssUnit.turn],
    [CssUnit.px, CssUnit.s],
  );
});
