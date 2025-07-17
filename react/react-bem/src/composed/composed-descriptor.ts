import type { Descriptor } from "../descriptor";

import type { ComposedData } from "./composed-data";
import type { ComposedType } from "./composed-type";

export type ComposedDescriptor<TData extends ComposedData = ComposedData> =
  Descriptor<ComposedType, TData>;
