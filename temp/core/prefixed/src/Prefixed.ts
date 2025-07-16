import type { Literal } from "@positron/lang";

import type { PrefixSeparator } from "./PrefixSeparator";

export type Prefixed<
  TPrefix extends Literal,
  TKey extends Literal,
> = `${TPrefix}${PrefixSeparator}${TKey}`;
