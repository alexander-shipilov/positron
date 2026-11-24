import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssUnit } from "../unit/css-unit";

import { CssAbsoluteLengthUnits } from "./css-absolute-length-units";
import { CssLengthUnits } from "./css-length-units";
import { CssRelativeLengthUnits } from "./css-relative-length-units";

describe("const CssLengthUnits", () => {
  unitSetTests(
    CssLengthUnits,
    [...CssAbsoluteLengthUnits, ...CssRelativeLengthUnits],
    [CssUnit.deg, CssUnit.s, CssUnit.hz],
  );
});
