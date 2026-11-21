/**
 * The {@link MarkdownPage} interface represents an API page generated during
 * documentation processing.
 *
 * @public
 */
export interface MarkdownPage {
  /**
   * The {@link MarkdownPage.content} read-only property returns the text
   * content of the page.
   */
  readonly content: string;

  /**
   * The {@link MarkdownPage.filename} read-only property returns the output
   * file path where the page will be written.
   */
  readonly filename: string;
}
