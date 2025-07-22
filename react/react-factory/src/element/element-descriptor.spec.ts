import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";
import type { ElementDescriptorData } from "./element-descriptor-data";
import type { ElementDescriptorType } from "./element-descriptor-type";
import type { ElementMeta } from "./element-meta";

describe("ElementDescriptor<P, M>", () => {
  it("should be `Descriptor<ElementDescriptorType, ElementDescriptorData<P, M>>`", () => {
    expectTypeOf<ElementDescriptor<{ foo: 1 }, ElementMeta>>().toEqualTypeOf<
      Descriptor<
        ElementDescriptorType,
        ElementDescriptorData<{ foo: 1 }, ElementMeta>
      >
    >();
  });
});
