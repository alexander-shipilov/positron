import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssViewportPercentageUnits } from "./css-viewport-percentage-units";

describe("const CssViewportPercentageUnits", () => {
  unitSetTests(
    CssViewportPercentageUnits,
    [
      CssUnit.dvb,
      CssUnit.dvh,
      CssUnit.dvi,
      CssUnit.dvmax,
      CssUnit.dvmin,
      CssUnit.dvw,
      CssUnit.lvb,
      CssUnit.lvh,
      CssUnit.lvi,
      CssUnit.lvmax,
      CssUnit.lvmin,
      CssUnit.lvw,
      CssUnit.svb,
      CssUnit.svh,
      CssUnit.svi,
      CssUnit.svmax,
      CssUnit.svmin,
      CssUnit.svw,
      CssUnit.vb,
      CssUnit.vh,
      CssUnit.vi,
      CssUnit.vmax,
      CssUnit.vmin,
      CssUnit.vw,
    ],
    [CssUnit.px, CssUnit.em],
  );
});
