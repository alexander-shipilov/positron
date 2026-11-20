import type { InterfaceSignature } from "../interface-signature";
import { opt, required } from "../../param";
import { Signature } from "../signature";

export class DateConstructorSignature
  extends Signature<DateConstructor>
  implements InterfaceSignature<DateConstructor>
{
  public readonly now = this[Signature.this] //
    .method("now")();

  public readonly parse = this[Signature.this] //
    .method("parse")
    .params(required`string`)();

  public readonly prototype = this[Signature.this] //
    .property("prototype")();

  public readonly [Signature.call] = this[Signature.this] //
    .call()();

  public readonly [Signature.new] = this[Signature.this] //
    .new()
    .params(required`value`)();

  public readonly UTC = [
    this[Signature.this]
      .method("UTC")
      .params(
        required`year`,
        opt`month`,
        opt`date`,
        opt`hours`,
        opt`minutes`,
        opt`seconds`,
        opt`ms`,
      )(),
  ];
}
