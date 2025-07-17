export type DescriptorValue<TValue> =
  | TValue
  | (<TProps = never>(props: TProps) => TValue);
