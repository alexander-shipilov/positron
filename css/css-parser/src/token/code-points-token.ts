import type { CodePoints } from "./code-points";
import type { TokenType } from "./token-type";
import { ValueToken } from "./value-token";

/**
 * <ident-token>, <function-token>, <at-keyword-token>, <hash-token>,
 * <string-token>, and <url-token> have a value composed of zero or more code
 * points. Additionally, hash tokens have a type flag set to either "id" or
 * "unrestricted". The type flag defaults to "unrestricted" if not otherwise
 * set.
 */
export abstract class CodePointsToken<
  TType extends TokenType,
> extends ValueToken<TType, CodePoints> {}
