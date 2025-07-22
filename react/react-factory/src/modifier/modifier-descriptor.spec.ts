import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierDescriptorData } from "./modifier-descriptor-data";
import type { ModifierDescriptorType } from "./modifier-descriptor-type";
import type { ModifierMeta } from "./modifier-meta";

describe("ModifierDescriptor<M>", () => {
  it("should be `Descriptor<ModifierDescriptorType, ModifierDescriptorData<M>>`", () => {
    expectTypeOf<ModifierDescriptor<ModifierMeta>>().toEqualTypeOf<
      Descriptor<ModifierDescriptorType, ModifierDescriptorData<ModifierMeta>>
    >();
  });
});
