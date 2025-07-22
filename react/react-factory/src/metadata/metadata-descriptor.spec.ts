import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { MetadataDescriptor } from "./metadata-descriptor";
import type { MetadataDescriptorData } from "./metadata-descriptor-data";
import type { MetadataDescriptorType } from "./metadata-descriptor-type";

describe("MetadataDescriptor<M>", () => {
  it("should be `Descriptor<MetadataDescriptorType, MetadataDescriptorData<M>>`", () => {
    expectTypeOf<MetadataDescriptor<"foo">>().toEqualTypeOf<
      Descriptor<MetadataDescriptorType, MetadataDescriptorData<"foo">>
    >();
  });
});
