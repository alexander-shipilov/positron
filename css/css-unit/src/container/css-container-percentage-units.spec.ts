import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssContainerPercentageUnits } from "./css-container-percentage-units";

describe("const CssContainerPercentageUnits", () => {
  unitSetTests(
    CssContainerPercentageUnits,
    [
      CssUnit.cqb,
      CssUnit.cqh,
      CssUnit.cqi,
      CssUnit.cqmax,
      CssUnit.cqmin,
      CssUnit.cqw,
    ],
    [CssUnit.px, CssUnit.vw],
  );
});
