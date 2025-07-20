import type { Optional } from "@positron/core";
import type {
  ReactAnyProps,
  ReactComponent,
  ReactProps,
} from "@positron/react-core";

import type { Descriptor } from "../descriptor";

import type { ElementType } from "./element-type";
import type { ElementValue } from "./element-value";

export interface ElementConfig<
  TValue extends ElementValue = ElementValue,
  TProps extends ReactProps = ReactProps,
> extends Descriptor<ElementType> {
  className: Optional<string>;
  Component: ReactComponent<TProps>;
  props: ReactAnyProps;
  value: TValue;
}
