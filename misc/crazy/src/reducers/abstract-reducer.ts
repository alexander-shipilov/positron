import type { CrazyEntity, CrazyReducer } from "../crazy";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Product,
  Subtraction,
} from "../entities";

export abstract class AbstractReducer implements CrazyReducer {
  reduce(entity: CrazyEntity): CrazyEntity {
    switch (true) {
      case entity instanceof Negation:
        return this.reduceNegation(entity);
      case entity instanceof Addition:
        return this.reduceAddition(entity);
      case entity instanceof Subtraction:
        return this.reduceSubtraction(entity);
      case entity instanceof Product:
        return this.reduceProduct(entity);
      case entity instanceof Division:
        return this.reduceDivision(entity);
      case entity instanceof Exponentiation:
        return this.reduceExponentiation(entity);
      default:
        return entity;
    }
  }

  protected abstract reduceAddition(entity: Addition): CrazyEntity;

  protected abstract reduceDivision(entity: Division): CrazyEntity;

  protected abstract reduceExponentiation(entity: Exponentiation): CrazyEntity;

  protected abstract reduceNegation(entity: Negation): CrazyEntity;

  protected abstract reduceProduct(entity: Product): CrazyEntity;

  protected abstract reduceSubtraction(entity: Subtraction): CrazyEntity;
}
