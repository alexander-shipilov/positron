import { describe } from "@jest/globals";

import { unitSetTests } from "../-tests/unit-set-tests";

import { CssUnit } from "./css-unit";
import { CssUnits } from "./css-units";

describe("const CssUnits", () => {
  unitSetTests(CssUnits, Object.values(CssUnit));
});
