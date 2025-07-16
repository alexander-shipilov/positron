import type { TreeExceptionInterface } from "../types";
import { TreeExceptionNameEnum } from "./TreeExceptionName.enum";

export class TreeException extends Error implements TreeExceptionInterface {
  constructor(message: string, public readonly name: TreeExceptionNameEnum) {
    super(message);
  }
}
