import type {
  EmptyObject,
  PropertyKeyOf,
  PropertyName,
} from "@positron/lang-core";
import type { ReactComponent } from "@positron/react-core";

import type { Composed } from "./composed";
import type { Descriptor, DescriptorClass } from "./descriptor";
import type { Element } from "./element";
import type { Modifier } from "./modifier";

type CmpVal = { prop1: string; prop2: number };

type DescribedKey<TProps> = PropertyKeyOf<TProps, PropertyName>;

type DescribedKeyOf<
  TPrefix extends string,
  TValue,
> = `${TPrefix}-${DescriptorKeyOf<TValue>}`;

type DescriptorKeyOf<TValue> = DescribedKey<DescriptorOf<TValue>>;

type DescriptorOf<TValue> =
  TValue extends DescriptorClass<infer Props> ? Props : never;

type Flatten<T> = UnionToIntersection<
  {
    [K in keyof T]: {
      [P in keyof T[K] as `${K & string}-${P & string}`]: T[K][P];
    };
  }[keyof T] extends infer U
    ? { [P in keyof U]: U[P] }
    : EmptyObject
>;

type ModVal = "bar" | "foo";

type OmitDescriptors<TProps> = {
  [K in keyof TProps]: TProps[K] extends Descriptor<infer Value>
    ? Value
    : TProps[K];
};

type PickDescribed<TProps> = Flatten<{
  [Key in DescribedKey<TProps> as TProps[Key] extends DescriptorClass
    ? Key
    : never]: DescriptorOf<TProps[Key]>;
}>;

type Prefixed<TPrefix extends PropertyName, TProps> = {
  [Key in DescribedKey<TProps> as `${TPrefix}-${Key}`]: TProps[Key];
};

type PrefixedDescriptorProps<TValue> =
  TValue extends DescriptorClass<infer Props> ? Props : never;

type Props = {
  cmp: Composed<CmpVal>;
  el: Element<string, { value: string }>;
  mod: Modifier<ModVal, { ted: string }>;
  value: string;
};

type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer I,
) => void
  ? I
  : never;

declare const p1: PickDescribed<Props>;

type PickDescribedProps<TProps> = {
  [Key in keyof PickDescribed<TProps>]: TProps[Key] extends DescriptorClass<
    infer Props
  >
    ? Props
    : EmptyObject;
};

type PickDescriptors<TProps> = {
  [Key in keyof PickDescribed<TProps>]: TProps[Key] extends Descriptor<
    infer Value,
    infer Props
  >
    ? Props & { value: Value }
    : never;
};

declare const p2: PickDescriptors<Props>;

declare const p3: OmitDescriptors<Props>;

type Block<TParent, TProps> = TProps & {
  Component: ReactComponent<TParent>;
};
