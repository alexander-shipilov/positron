import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssResolutionUnits } from "./css-resolution-units";

describe("const CssResolutionUnits", () => {
  unitSetTests(
    CssResolutionUnits,
    [CssUnit.dpcm, CssUnit.dpi, CssUnit.dppx, CssUnit.x],
    [CssUnit.px, CssUnit.deg],
  );
});
