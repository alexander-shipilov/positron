import type { SpecJestEnv } from "../spec-jest-env";
import type { SpecTests } from "../spec-tests";
import { Spec } from "../spec";
import { SpecKey } from "../spec-key";
import { SpecMeta } from "../spec-meta";

import type { Example } from "./example";
import type { ExampleSpecArgs } from "./example-spec-args";

/**
 * The {@link ExampleSpec} class contains specifications to describe
 * {@link Example} interface.
 */
@SpecMeta.interface("Example")
export class ExampleSpec
  extends Spec<ExampleSpecArgs>
  implements SpecTests<Example, ExampleSpecArgs>
{
  @SpecMeta.method("arg")
  public readonly bar = (jest: SpecJestEnv, create: () => Example): void => {
    const instance = create();

    jest.it("should convert `arg` to a string", () => {
      jest.expect(instance.bar(1)).toBe("1");
      jest.expect(instance.bar(NaN)).toBe("NaN");
    });
  };

  @SpecMeta.method()
  public readonly foo = (jest: SpecJestEnv, create: () => Example): void => {
    const instance = create();

    jest.it('should return "foo"', () => {
      jest.expect(instance.foo()).toBe("foo");
    });
  };

  @SpecMeta.index("n")
  public readonly [SpecKey.Number] = (
    jest: SpecJestEnv,
    create: (...items: string[]) => Example,
  ): void => {
    const instance = create("foo", "bar");

    jest.it("should return an item at `n`-th position", () => {
      jest.expect(instance[0]).toBe("foo");
      jest.expect(instance[1]).toBe("bar");
      jest.expect(instance[2]).toBeUndefined();
    });
  };
}
