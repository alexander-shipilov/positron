import { EventEmitter } from "node:events";

import type { OperandArg } from "./entity";
import type { Generator } from "./generator";
import type { Resolver } from "./resolver";
import type { SequenceEvents } from "./sequence-events";
import { isExceptionType } from "./exception";

/**
 *
 */
export class Sequence<TValue> extends EventEmitter<SequenceEvents<TValue>> {
  constructor(
    protected readonly generator: Generator,
    protected readonly resolver: Resolver<TValue>,
  ) {
    super();
  }

  resolve(digits: OperandArg): void {
    let total = 0;
    let resolved = 0;

    for (const entity of this.generator.generate(digits)) {
      const result = this.resolver.resolve(entity);

      if (isExceptionType(result)) {
        this.emit("reject", entity, result);
      } else {
        this.emit("resolve", entity, result);
        resolved++;
      }
      this.emit("progress", ++total, resolved);
    }

    this.emit("complete", total, resolved);
  }
}
