import type { Callable } from "../callable";
import type { Identifier } from "../identifier";
import type { Instantiable } from "../instantiable";
import { toIdentifier } from "../identifier";

import type { CallFactory } from "./call-factory";
import type { IndexerFactory } from "./indexer-factory";
import type { Interface } from "./interface";
import type { MethodFactory } from "./method-factory";
import type { MethodKeyOf } from "./method-key-of";
import type { NewFactory } from "./new-factory";
import type { PropertyFactory } from "./property-factory";
import type { SignatureKey } from "./signature-key";
import type { SignatureKeyOf } from "./signature-key-of";
import { EntityObject } from "./entity-object";
import { EntityType } from "./entity-type";

export class InterfaceObject<TTarget>
  extends EntityObject<EntityType.Interface>
  implements Interface
{
  public readonly name: Identifier;

  public get entityType(): EntityType.Interface {
    return EntityType.Interface;
  }

  public constructor(name: string) {
    super();

    this.name = toIdentifier(name);
  }

  public call(): TTarget extends Callable ? CallFactory<TTarget> : never {
    throw new Error("Method not implemented.");
  }

  public indexer(name: string): IndexerFactory {
    throw new Error("Method not implemented.");
  }

  public method<TKey extends MethodKeyOf<TTarget, SignatureKey>>(
    key: TKey,
  ): TTarget[TKey] extends Callable
    ? MethodFactory<TKey, TTarget[TKey]>
    : never {
    throw new Error("Method not implemented.");
  }

  public new(): TTarget extends Instantiable ? NewFactory<TTarget> : never {
    throw new Error("Method not implemented.");
  }

  public property<TKey extends SignatureKeyOf<TTarget>>(
    key: TKey,
  ): PropertyFactory<TTarget, TKey> {
    throw new Error("Method not implemented.");
  }
}
