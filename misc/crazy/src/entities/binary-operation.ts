import type { CrazyEntity, CrazyEntityType } from "../crazy";

export abstract class BinaryOperation<
  TType extends CrazyEntityType = CrazyEntityType,
> implements CrazyEntity<TType>
{
  abstract readonly type: TType;

  /**
   * @param arg1 - The first argument
   * @param arg2 - The second argument
   */
  constructor(
    readonly arg1: CrazyEntity,
    readonly arg2: CrazyEntity,
  ) {}
}
