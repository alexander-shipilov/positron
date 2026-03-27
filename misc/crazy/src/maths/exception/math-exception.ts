import { Exception } from "@positron/core";

import type { MathExceptionName } from "./math-exception-name";

/**
 * @public
 */
export class MathException extends Exception<MathExceptionName> {
  /**
   * @param name
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(name: MathExceptionName) {
    super(name);
  }
}
