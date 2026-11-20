import { describe } from "@jest/globals";

import { SpecJest } from "../spec-jest";
import { SpecJestRunner } from "../spec-jest-runner";

import { ExampleClassSpec } from "./example-class-spec";
import { ExampleImpl } from "./example-impl";
import { ExampleSpec } from "./example-spec";

const runner = new SpecJestRunner(SpecJest);

describe("ExampleImpl", () => {
  runner.describe(ExampleClassSpec, ExampleImpl);
  runner.describe(ExampleSpec, (...v: string[]) => new ExampleImpl(...v));
});
