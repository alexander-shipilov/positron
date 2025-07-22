import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Element } from "./element";
import type { ElementConfig } from "./element-config";
import type { ElementConfigOf } from "./element-config-of";
import type { ElementMeta } from "./element-meta";

describe("ElementConfigOf<T>", () => {
  it("should return `ElementConfig<V, P, ElementMeta & M>` if `T` is `Element<V, P, M>`", () => {
    type T1 = Element<"ted", { foo: 1 }, { bar: 2 }>;
    expectTypeOf<ElementConfigOf<T1>>().toEqualTypeOf<
      ElementConfig<"ted", { foo: 1 }, ElementMeta & { bar: 2 }>
    >();
  });

  it("should return `never` if no property descriptor assigned to the `T`", () => {
    expectTypeOf<ElementConfigOf<string>>().toBeNever();
    expectTypeOf<ElementConfigOf<Described<string>>>().toBeNever();
  });
});
