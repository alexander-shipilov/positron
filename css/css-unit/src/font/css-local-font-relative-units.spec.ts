import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssLocalFontRelativeUnits } from "./css-local-font-relative-units";

describe("const CssLocalFontRelativeUnits", () => {
  unitSetTests(
    CssLocalFontRelativeUnits,
    [CssUnit.cap, CssUnit.ch, CssUnit.em, CssUnit.ex, CssUnit.ic, CssUnit.lh],
    [CssUnit.rem, CssUnit.px],
  );
});
