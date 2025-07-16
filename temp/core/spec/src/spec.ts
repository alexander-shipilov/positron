import { describe } from "@jest/globals";
import { getOwnPropertyKeys } from "@positron/lang";

import type { SpecKey } from "./spec-key";
import type { SpecTests } from "./spec-tests";

import { defineMethod, getDescription } from "./utils";

export class Spec<TValue extends object> {
  static method(...args: string[]) {
    return function (target: object, key: SpecKey) {
      defineMethod(target, key, args);
    };
  }

  constructor(protected tests: SpecTests<TValue>) {}

  describe() {
    const { tests } = this;

    getOwnPropertyKeys(tests).forEach((key) => {
      describe(getDescription(tests, key), tests[key]);
    });
  }
}
