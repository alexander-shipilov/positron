import type {
  ClassName,
  ClassNameProp,
  ReactComponent,
} from "@positron/react-core";

import type { DescriptorData } from "../descriptor";

import type { ElementValue } from "./element-value";

/**
 * The {@link ElementData} type represents a properties of the {@link Element}
 * descriptor.
 *
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ElementData<
  TValue extends ElementValue,
  TComponentProps,
  TDescriptorProps,
> = DescriptorData<
  TValue,
  Omit<TDescriptorProps, ClassNameProp | keyof TComponentProps>
> & {
  Component: ReactComponent<TComponentProps>;
  className: ClassName;
};
