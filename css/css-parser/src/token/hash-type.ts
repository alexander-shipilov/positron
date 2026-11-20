/**
 * Additionally, hash tokens have a type flag set to either "id"
 * or "unrestricted". The type flag defaults to "unrestricted" if not otherwise
 * set.
 */
export enum HashType {
  Id = "id",
  Unrestricted = "unrestricted",
}
