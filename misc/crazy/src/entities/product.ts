import { CrazyEntityType } from "../crazy";

import { BinaryOperation } from "./binary-operation";

export class Product extends BinaryOperation<CrazyEntityType.Product> {
  get type(): CrazyEntityType.Product {
    return CrazyEntityType.Product;
  }
}
