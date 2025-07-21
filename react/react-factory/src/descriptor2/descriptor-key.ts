import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { DescribedNominal } from "../described/described-nominal";

export type DescriptorKey<
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> = TProps[TKey] extends DescribedNominal ? TKey : never;
