import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssRootFontRelativeUnits } from "./css-root-font-relative-units";

describe("const CssRootFontRelativeUnits", () => {
  unitSetTests(
    CssRootFontRelativeUnits,
    [
      CssUnit.rcap,
      CssUnit.rch,
      CssUnit.rem,
      CssUnit.rex,
      CssUnit.ric,
      CssUnit.rlh,
    ],
    [CssUnit.em, CssUnit.px],
  );
});
