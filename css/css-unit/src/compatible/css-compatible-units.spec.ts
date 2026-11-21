import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";
import { CssAngleUnits } from "../angle/css-angle-units";
import { CssFrequencyUnits } from "../frequency/css-frequency-units";
import { CssAbsoluteLengthUnits } from "../length/css-absolute-length-units";
import { CssResolutionUnits } from "../resolution/css-resolution-units";
import { CssTimeUnits } from "../time/css-time-units";
import { CssUnit } from "../unit/css-unit";

import { CssCompatibleUnits } from "./css-compatible-units";

describe("const CssCompatibleUnits", () => {
  unitSetTests(
    CssCompatibleUnits,
    [
      ...CssAbsoluteLengthUnits,
      ...CssAngleUnits,
      ...CssFrequencyUnits,
      ...CssResolutionUnits,
      ...CssTimeUnits,
    ],
    [CssUnit.em, CssUnit.fr, CssUnit.rem, CssUnit.vw],
  );
});
