import { describe, expect, it } from "@jest/globals";

import { Digit } from "../digit";
import { CrazyInfixFormatter } from "../formatters";
import { map } from "../iterable";
import {
  AssociativeReducer,
  CompositeReducer,
  NegationReducer,
} from "../reducers";

import { GeneratorTotal } from "./generator-total";

describe(GeneratorTotal.name, () => {
  const generator = new GeneratorTotal();

  const formatter = new CrazyInfixFormatter();

  const reducer = new CompositeReducer([
    new NegationReducer(),
    new AssociativeReducer(),
  ]);

  describe("generate(digits)", () => {
    it("should create all possible combinations", () => {
      expect(
        new Set(
          map(
            generator.generate([
              Digit(1), //
              Digit(2),
              Digit(3),
              Digit(4),
              // Digit(5),
              // Digit(6),
            ]),
            (entity) => formatter.format(reducer.reduce(entity)),
          ),
        ).size,
      ).toEqual(0);
    });
  });
});
