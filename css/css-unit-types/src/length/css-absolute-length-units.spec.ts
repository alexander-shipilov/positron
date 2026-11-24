import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssAbsoluteLengthUnits } from "./css-absolute-length-units";

describe("const CssAbsoluteLengthUnits", () => {
  unitSetTests(
    CssAbsoluteLengthUnits,
    [
      CssUnit.cm,
      CssUnit.in,
      CssUnit.mm,
      CssUnit.pc,
      CssUnit.pt,
      CssUnit.px,
      CssUnit.q,
    ],
    [CssUnit.em, CssUnit.vw],
  );
});
