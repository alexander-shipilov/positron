import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { ValueDescriptor } from "./value-descriptor";
import type { ValueDescriptorData } from "./value-descriptor-data";
import type { ValueDescriptorType } from "./value-descriptor-type";

describe("ValueDescriptor<M>", () => {
  it("should be `Descriptor<ValueDescriptorType, ValueDescriptorData<M>>`", () => {
    expectTypeOf<ValueDescriptor<"foo">>().toEqualTypeOf<
      Descriptor<ValueDescriptorType, ValueDescriptorData<"foo">>
    >();
  });
});
