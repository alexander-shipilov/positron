import type { SpecEntityType } from "../spec-entity";
import { SpecEntity } from "../spec-entity";

/**
 * @public
 */
export class SpecLiteral<
  TEntityType extends SpecEntityType,
  TValue = unknown,
> extends SpecEntity<TEntityType> {
  /**
   *
   */
  public readonly tokens: readonly (string | TValue)[];

  /**
   *
   * @param entityType -
   * @param parts -
   * @param values -
   */
  public constructor(
    entityType: TEntityType,
    parts: TemplateStringsArray,
    ...values: readonly TValue[]
  ) {
    super(entityType);

    this.tokens = values.reduce<(string | TValue)[]>(
      (tokens, token, index) => {
        tokens.push(token);

        if (parts[index + 1] !== "") {
          tokens.push(parts[index + 1]);
        }

        return tokens;
      },
      parts[0] === "" ? [] : [parts[0]],
    );
  }
}
