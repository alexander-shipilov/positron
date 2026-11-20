import type { Param } from "./param";

export interface ParamOwner<TParams extends readonly Param[]> {
  readonly params: TParams;
}
