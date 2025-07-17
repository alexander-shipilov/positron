import type { EmptyObject } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { ModifierProps } from "./modifier-props";
import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";

/**
 *
 */
export type Modifier<
  TValue extends ModifierValue,
  TProps = EmptyObject,
> = Descriptor<
  TValue,
  ModifierProps & TProps,
  ModifierType //
>;
