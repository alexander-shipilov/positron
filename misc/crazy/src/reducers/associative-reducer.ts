import type { CrazyEntity } from "../crazy";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Product,
  Subtraction,
} from "../entities";

import { AbstractReducer } from "./abstract-reducer";

export class AssociativeReducer extends AbstractReducer {
  protected reduceAddition(entity: Addition): CrazyEntity {
    const arg1 = this.reduce(entity.arg1);
    const arg2 = this.reduce(entity.arg2);

    return arg2 instanceof Addition
      ? this.reduceAddition(
          new Addition(new Addition(arg1, arg2.arg1), arg2.arg2),
        )
      : arg2 instanceof Subtraction
        ? this.reduceSubtraction(
            new Subtraction(new Addition(arg1, arg2.arg1), arg2.arg2),
          )
        : arg1 !== entity.arg1 || arg2 !== entity.arg2
          ? new Addition(arg1, arg2)
          : entity;
  }

  protected reduceDivision(entity: Division): CrazyEntity {
    const arg1 = this.reduce(entity.arg1);
    const arg2 = this.reduce(entity.arg2);

    return arg2 instanceof Product
      ? this.reduceDivision(
          new Division(new Division(arg1, arg2.arg1), arg2.arg2),
        )
      : arg2 instanceof Division
        ? this.reduceProduct(
            new Product(new Division(arg1, arg2.arg1), arg2.arg2),
          )
        : arg1 !== entity.arg1 || arg2 !== entity.arg2
          ? new Division(arg1, arg2)
          : entity;
  }

  protected reduceExponentiation(entity: Exponentiation): CrazyEntity {
    const arg1 = this.reduce(entity.arg1);
    const arg2 = this.reduce(entity.arg2);

    return arg1 !== entity.arg1 || arg2 !== entity.arg2
      ? new Exponentiation(arg1, arg2)
      : entity;
  }

  protected reduceNegation(entity: Negation): CrazyEntity {
    const arg = this.reduce(entity.arg);

    return arg !== entity.arg ? new Negation(arg) : entity;
  }

  protected reduceProduct(entity: Product): CrazyEntity {
    const arg1 = this.reduce(entity.arg1);
    const arg2 = this.reduce(entity.arg2);

    return arg2 instanceof Product
      ? this.reduceProduct(new Product(new Product(arg1, arg2.arg1), arg2.arg2))
      : arg2 instanceof Division
        ? this.reduceDivision(
            new Division(new Product(arg1, arg2.arg1), arg2.arg2),
          )
        : arg1 !== entity.arg1 || arg2 !== entity.arg2
          ? new Product(arg1, arg2)
          : entity;
  }

  protected reduceSubtraction(entity: Subtraction): CrazyEntity {
    const arg1 = this.reduce(entity.arg1);
    const arg2 = this.reduce(entity.arg2);

    return arg2 instanceof Subtraction
      ? this.reduceAddition(
          new Addition(new Subtraction(arg1, arg2.arg1), arg2.arg2),
        )
      : arg2 instanceof Addition
        ? this.reduceSubtraction(
            new Subtraction(new Subtraction(arg1, arg2.arg1), arg2.arg2),
          )
        : arg1 !== entity.arg1 || arg2 !== entity.arg2
          ? new Subtraction(arg1, arg2)
          : entity;
  }
}
