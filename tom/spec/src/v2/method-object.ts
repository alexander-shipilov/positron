import type { Entity } from "./entity";
import type { Method } from "./method";
import type { Param } from "./param";
import type { SignatureKey } from "./signature-key";
import { EntityType } from "./entity-type";
import { MemberObject } from "./member-object";

export class MethodObject<
  TKey extends SignatureKey,
  TParams extends readonly Param[],
>
  extends MemberObject<EntityType.Method>
  implements Method<TKey, TParams>
{
  public readonly name: TKey;

  public readonly params: TParams;

  public get entityType(): EntityType.Method {
    return EntityType.Method;
  }

  public constructor(parent: Entity, name: TKey, params: TParams) {
    super(parent);

    this.name = name;
    this.params = params;
  }
}
