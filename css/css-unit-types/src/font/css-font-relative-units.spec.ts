import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssFontRelativeUnits } from "./css-font-relative-units";
import { CssLocalFontRelativeUnits } from "./css-local-font-relative-units";
import { CssRootFontRelativeUnits } from "./css-root-font-relative-units";

describe("const CssFontRelativeUnits", () => {
  unitSetTests(
    CssFontRelativeUnits,
    [...CssLocalFontRelativeUnits, ...CssRootFontRelativeUnits],
    [CssUnit.px, CssUnit.vw],
  );
});
