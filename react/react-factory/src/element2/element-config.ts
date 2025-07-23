import type { Optional } from "@positron/core";
import type {
  ReactAnyProps,
  ReactComponent,
  ReactProps
} from "@positron/react-core";

import type { Descriptor } from "../descriptor2";
import type { ElementDescriptorType } from "../element/element-descriptor-type";
import type {
  ElementDescriptorValue
} from "../element/element-descriptor-value";

export interface ElementConfig<
  TValue extends ElementDescriptorValue = ElementDescriptorValue,
  TProps extends ReactProps = ReactProps,
> extends Descriptor<ElementDescriptorType> {
  readonly className: Optional<string>;
  readonly Component: ReactComponent<TProps>;
  readonly data: TValue;
  readonly props: ReactAnyProps;
}
