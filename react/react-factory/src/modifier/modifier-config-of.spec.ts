import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Modifier } from "./modifier";
import type { ModifierConfig } from "./modifier-config";
import type { ModifierConfigOf } from "./modifier-config-of";
import type { ModifierMeta } from "./modifier-meta";

describe("ModifierConfigOf<T>", () => {
  it("should return `ModifierConfig<V, ModifierMeta & M>` if `T` is `Modifier<V, M>`", () => {
    type T1 = Modifier<"ted", { bar: 2 }>;
    expectTypeOf<ModifierConfigOf<T1>>().toEqualTypeOf<
      ModifierConfig<"ted", ModifierMeta & { bar: 2 }>
    >();
  });

  it("should return `never` if no property descriptor assigned to the `T`", () => {
    expectTypeOf<ModifierConfigOf<string>>().toBeNever();
    expectTypeOf<ModifierConfigOf<Described<string>>>().toBeNever();
  });
});
