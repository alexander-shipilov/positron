/**
 * The {@link HashType} enumeration represents the type flag of a
 * {@link HashToken}.
 *
 * @remarks
 *   See https://w3.org.
 *
 * @public
 */
export enum HashType {
  /**
   * The {@link HashType.Id} member indicates a hash token whose value is a
   * valid CSS identifier.
   */
  Id = "id",

  /**
   * The {@link HashType.Unrestricted} member indicates an unrestricted hash
   * token.
   */
  Unrestricted = "unrestricted",
}
