import type { CodePoints } from "./code-points";
import { CodePointsToken } from "./code-points-token";
import { HashType } from "./hash-type";
import { TokenType } from "./token-type";

/**
 * Additionally, hash tokens have a type flag set to either "id" or
 * "unrestricted". The type flag defaults to "unrestricted" if not otherwise
 * set.
 */
export class HashToken extends CodePointsToken {
  public readonly hashType: HashType;

  public get type(): TokenType {
    return TokenType.Hash;
  }

  public constructor(
    value: CodePoints,
    hashType: HashType = HashType.Unrestricted,
  ) {
    super(value);

    this.hashType = hashType;
  }
}
