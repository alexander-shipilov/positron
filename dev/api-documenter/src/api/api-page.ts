/**
 * The {@link ApiPage} interface represents an API page.
 */
export interface ApiPage {
  /**
   * The page content.
   */
  readonly content: string;

  /**
   * The filename where the output will be written.
   */
  readonly filename: string;
}
