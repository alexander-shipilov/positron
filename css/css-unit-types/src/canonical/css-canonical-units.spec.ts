import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssCanonicalUnits } from "./css-canonical-units";

describe("const CssCanonicalUnits", () => {
  unitSetTests(
    CssCanonicalUnits,
    [CssUnit.deg, CssUnit.dppx, CssUnit.hz, CssUnit.px, CssUnit.s],
    [CssUnit.em, CssUnit.in, CssUnit.ms, CssUnit.rad],
  );
});
