import type { Entity } from "./entity";
import type { InterfaceObject } from "./interface-object";
import type { SignatureIndexer } from "./signature-indexer";
import type { SignatureKey } from "./signature-key";

export class Signature<TTarget> implements SignatureIndexer {
  public static readonly call = Symbol("call");

  public static readonly new = Symbol("new");

  public static readonly number = Symbol("number");

  public static readonly string = Symbol("string");

  public static readonly symbol = Symbol("symbol");

  public static readonly this = Symbol("this");

  readonly [key: SignatureKey]: Entity | Entity[];

  declare protected readonly [Signature.this]: InterfaceObject<TTarget>;

  public constructor(_this: InterfaceObject<TTarget>) {
    this[Signature.this] = _this;
  }
}
