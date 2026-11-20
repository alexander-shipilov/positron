import type { InterfaceSignature } from "../interface-signature";
import { Signature } from "../signature";

export class ArrayLikeSignature
  extends Signature<ArrayLike<never>>
  implements InterfaceSignature<ArrayLike<never>>
{
  public readonly length = this[Signature.this] //
    .property("length")();

  public readonly [Signature.number] = this[Signature.this] //
    .indexer("n")();
}
