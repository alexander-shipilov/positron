import type { NumericImpl } from "../numeric-impl";

import type { SerializerImpl } from "./serializer-impl";

export interface SerializerImplClass {
  new (impl: NumericImpl): SerializerImpl;
}
