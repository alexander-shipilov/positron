import type { SpecClassTests } from "../spec-class-tests";
import type { SpecJestEnv } from "../spec-jest-env";
import { Spec } from "../spec";
import { SpecKey } from "../spec-key";
import { SpecMeta } from "../spec-meta";

import type { ExampleClass } from "./example-class";
import type { ExampleClassSpecArgs } from "./example-class-spec-args";

@SpecMeta.interface("ExampleClass", "TFoo")
export class ExampleClassSpec
  extends Spec<ExampleClassSpecArgs>
  implements SpecClassTests<ExampleClass, ExampleClassSpecArgs>
{
  @SpecMeta.method("items")
  public from = (env: SpecJestEnv, Example: ExampleClass) => {
    env.it(
      "should create an instance of `Example` from the passed iterable",
      () => {
        const instance = Example.from(new Set(["bar", "foo"]));

        env.expect(instance[0]).toBe("bar");
        env.expect(instance[1]).toBe("foo");
      },
    );
  };

  @SpecMeta.new("...items")
  public [SpecKey.New] = (env: SpecJestEnv, Example: ExampleClass) => {
    env.it("should create indexes for the passed arguments", () => {
      const instance = new Example("foo", "bar");

      env.expect(instance[0]).toBe("foo");
      env.expect(instance[1]).toBe("bar");
    });
  };
}
