import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { DescriptorNominal } from "./descriptor-nominal";

export type DescriptorKey<
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> = TProps[TKey] extends DescriptorNominal ? TKey : never;
