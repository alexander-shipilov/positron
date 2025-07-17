/**
 * @internal
 */
export declare class DescriptorClass<
  TProps = unknown,
  TType extends symbol = symbol,
> {
  private readonly props: TProps;

  private readonly type: TType;
}
