import type { Numeric } from "../numeric";

import type { Serializer } from "./serializer";

export interface SerializerClass {
  new (impl: Numeric): Serializer;
}
