import { getOwnKeys } from "@positron/lang";

import type { SpecJestEnv } from "./spec-jest-env";
import type { SpecMetaKey } from "./spec-meta-key";
import type { SpecTest } from "./spec-test";
import { SpecMeta } from "./spec-meta";

/**
 * The {@link SpecJestRunner} class creates specification to describe the
 * specified interface or type `TTarget`
 *
 * @public
 */
export class SpecJestRunner {
  protected readonly jest: SpecJestEnv;

  public constructor(env: SpecJestEnv) {
    this.jest = env;
  }

  /**
   * The `describe()` method creates descriptions for all tests
   *
   * ```ts
   *  describe('SomeClass', () => {
   *    const test = new SomeClassTests()
   *    const spec = new Spec().describe(new SomeClassTests());
   *
   *    spec.describe('implements Interface');
   * });
   * ```
   *
   * @param Tests - Tests
   *
   * @param args - The arguments list to run tests.
   */
  public describe<TArgs extends unknown[]>(
    Tests: { new (): Record<SpecMetaKey, SpecTest<TArgs>> },
    ...args: TArgs
  ): void {
    const { describe } = this.jest;
    const tests = new Tests();

    describe(SpecMeta.getClass(Tests), () => {
      getOwnKeys(tests).forEach((key) => {
        describe(SpecMeta.getProperty(tests, key), () => {
          tests[key](this.jest, ...args);
        });
      });
    });
  }
}
