import type { TypeGuard } from "@positron/core";
import { never } from "@positron/core";

import type { Entity } from "../../entity";
import type { Serializer } from "../serializer";

/**
 * @public
 */
export class JsonSerializer<TValue> implements Serializer<string> {
  /**
   * @param serializer
   * @param isValue
   */
  constructor(
    protected readonly serializer: Serializer<TValue>,
    protected readonly isValue: TypeGuard<unknown, TValue>,
  ) {}

  /**
   * @param data
   */
  deserialize(data: string): Entity {
    const input: unknown = JSON.parse(data);

    return this.isValue(input)
      ? this.serializer.deserialize(input)
      : never("JsonSerializer.deserialize: invalid input", SyntaxError);
  }

  /**
   * @param entity
   */
  serialize(entity: Entity): string {
    return JSON.stringify(this.serializer.serialize(entity));
  }
}
