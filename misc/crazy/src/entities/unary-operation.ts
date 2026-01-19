import type { CrazyEntity, CrazyEntityType } from "../crazy";

export abstract class UnaryOperation<
  TType extends CrazyEntityType = CrazyEntityType,
> implements CrazyEntity<TType>
{
  abstract readonly type: TType;

  /**
   * @param arg - The argument
   */
  constructor(readonly arg: CrazyEntity) {}
}
