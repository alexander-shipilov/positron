export enum Multiplicity {
  /**
   * Exactly one (required).
   */
  One = "1",

  /**
   * At least one
   */
  OneMore = "1..*",

  /**
   * Zero (forbidden).
   */
  Zero = "0",

  /**
   * Zero or more (rest params, indexers, etc.).
   */
  ZeroMore = "0..*",

  /**
   * Zero or one (optional param, optional property)
   */
  ZeroOne = "0..1",
}
