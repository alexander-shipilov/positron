import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssFlexUnits } from "./css-flex-units";

describe("const CssFlexUnits", () => {
  unitSetTests(CssFlexUnits, [CssUnit.fr], [CssUnit.px, CssUnit.deg]);
});
