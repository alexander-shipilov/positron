import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssContainerPercentageUnits } from "../container/css-container-percentage-units";
import { CssFontRelativeUnits } from "../font/css-font-relative-units";
import { CssUnit } from "../unit/css-unit";
import { CssViewportPercentageUnits } from "../viewport/css-viewport-percentage-units";

import { CssRelativeLengthUnits } from "./css-relative-length-units";

describe("const CssRelativeLengthUnits", () => {
  unitSetTests(
    CssRelativeLengthUnits,
    [
      ...CssContainerPercentageUnits,
      ...CssFontRelativeUnits,
      ...CssViewportPercentageUnits,
    ],
    [CssUnit.px, CssUnit.cm],
  );
});
