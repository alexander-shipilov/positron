import { CodePointsToken } from "./code-points-token";
import { TokenType } from "./token-type";

/**
 * <ident-token>, <function-token>, <at-keyword-token>, <hash-token>,
 * <string-token>, and <url-token> have a value composed of zero or more code
 * points. Additionally, hash tokens have a type flag set to either "id" or
 * "unrestricted". The type flag defaults to "unrestricted" if not otherwise
 * set.
 *
 * @public
 */
export class UrlToken extends CodePointsToken<TokenType.Url> {
  public get type(): TokenType.Url {
    return TokenType.Url;
  }
}
