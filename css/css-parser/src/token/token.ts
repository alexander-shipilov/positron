import type { TokenType } from "./token-type";

/**
 * The {@link Token} abstract class represents the base class for all CSS
 * Syntax Module Level 3 tokens.
 *
 * @typeParam TType - The specific {@link TokenType} discriminant of the token.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export abstract class Token<TType extends TokenType = TokenType> {
  /**
   * The {@link Token."type"} read-only property returns the {@link TokenType}
   * discriminant of this token.
   */
  public abstract readonly type: TType;
}
