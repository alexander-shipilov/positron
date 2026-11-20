import type { InterfaceSignature } from "../interface-signature";
import { opt, required } from "../../param";
import { Signature } from "../signature";

export class SetSignature
  extends Signature<Set<never>>
  implements InterfaceSignature<Set<never>>
{
  public readonly add = this[Signature.this] //
    .method("add")
    .params(required`item`)();

  public readonly clear = this[Signature.this] //
    .method("clear")();

  public readonly delete = this[Signature.this] //
    .method("delete")
    .params(required`item`)();

  public readonly difference = this[Signature.this]
    .method("difference")
    .params(required`set`)();

  public readonly entries = this[Signature.this] //
    .method("entries")();

  public readonly forEach = this[Signature.this]
    .method("forEach")
    .params(required`callback`, opt`thisArg`)();

  public readonly has = this[Signature.this] //
    .method("has")
    .params(required`item`)();

  public readonly intersection = this[Signature.this]
    .method("intersection")
    .params(required`set`)();

  public readonly isDisjointFrom = this[Signature.this]
    .method("isDisjointFrom")
    .params(required`set`)();

  public readonly isSubsetOf = this[Signature.this]
    .method("isSubsetOf")
    .params(required`set`)();

  public readonly isSupersetOf = this[Signature.this]
    .method("isSupersetOf")
    .params(required`set`)();

  public readonly keys = this[Signature.this] //
    .method("keys")();

  public readonly size = this[Signature.this] //
    .property("size")();

  public readonly [Symbol.iterator] = this[Signature.this] //
    .method(Symbol.iterator)();

  public readonly [Symbol.toStringTag] = this[Signature.this] //
    .property(Symbol.toStringTag)();

  public readonly symmetricDifference = this[Signature.this]
    .method("symmetricDifference")
    .params(required`set`)();

  public readonly union = this[Signature.this] //
    .method("union")
    .params(required`set`)();

  public readonly values = this[Signature.this] //
    .method("values")();
}
