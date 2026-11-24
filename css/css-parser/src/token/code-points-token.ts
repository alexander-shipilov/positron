import type { CodePoints } from "./code-points";
import type { TokenType } from "./token-type";
import { ValueToken } from "./value-token";

/**
 * The {@link CodePointsToken} abstract class represents a {@link Token} whose
 * value is a sequence of {@link CodePoints}.
 *
 * @typeParam TType - The specific {@link TokenType} discriminant of the token.
 *
 * @public
 */
export abstract class CodePointsToken<
  TType extends TokenType,
> extends ValueToken<TType, CodePoints> {}
