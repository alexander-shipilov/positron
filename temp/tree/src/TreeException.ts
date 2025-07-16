import type { TreeExceptionName } from "./TreeExceptionName";
import type { TreeExceptionInterface } from "./types";

export class TreeException extends Error implements TreeExceptionInterface {
  constructor(
    message: string,
    public readonly name: TreeExceptionName,
  ) {
    super(message);
  }
}
