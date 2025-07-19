import type { UnknownObject } from "@positron/core/src";
import type { PropertyOwner } from "@positron/core/src";
import type { Optional } from "@positron/core/src";
import type { NonOptional } from "@positron/core/src";
import type { ReactComponent } from "@positron/react-core/src";
import type { ReactPropsOf } from "@positron/react-core/src";

type OmitComponent<TProps extends UnknownObject> = Omit<
  TProps,
  | "Component"
  | (TProps extends { Component: infer Component extends ReactComponent }
      ? keyof ReactPropsOf<Component>
      : never)
>;

type SetComponent<
  TProps extends UnknownObject,
  TComponent extends Optional<ReactComponent>,
> = PropertyOwner<"Component", TComponent> &
  ReactPropsOf<NonOptional<TComponent>> &
  TProps;
