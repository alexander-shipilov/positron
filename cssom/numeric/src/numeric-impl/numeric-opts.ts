import type { NumericFactoryOpts } from "./numeric-factory-opts";
import type { SerializerClass } from "./serializer";
import type { TypeClass } from "./type";

export interface NumericOpts extends NumericFactoryOpts {
  Serializer: SerializerClass;

  Type: TypeClass;
}
