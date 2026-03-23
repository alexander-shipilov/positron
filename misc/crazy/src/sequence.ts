import type { Class } from "@positron/core";

import type { EntityGenerator, EntityValue, OperandArg } from "./core";

export class Sequence<TValue extends EntityValue> {
  protected readonly generator: EntityGenerator<TValue>;

  constructor(
    protected readonly input: OperandArg,
    Generator: Class<EntityGenerator<TValue>>,
  ) {
    this.generator = new Generator();
  }

  generate() {
    const entities = this.generator.generate(this.input);
  }
}
