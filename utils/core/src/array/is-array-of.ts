import type { TypeGuard } from "../type-guard";

export function isArrayOf<TItem, TExpectedItem extends TItem>(
  maybeArrayOf: readonly TItem[],
  isType: TypeGuard<TItem, TExpectedItem>,
): maybeArrayOf is readonly TExpectedItem[] {
  return maybeArrayOf.every((item) => isType(item));
}
