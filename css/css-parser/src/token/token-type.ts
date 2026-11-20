/**
 *
 * @remarks
 *   https://www.w3.org/TR/css-syntax-3/#css-tokenize
 *
 *   The output of tokenization step is a stream of zero or more of the
 *   following tokens:
 *
 *   `<ident-token>`, `<function-token>`, `<at-keyword-token>`, `<hash-token>`,
 *   `<string-token>`, `<bad-string-token>`, `<url-token>`, `<bad-url-token>`,
 *   `<delim-token>`, `<number-token>`, `<percentage-token>`,
 *   `<dimension-token>`, `<unicode-range-token>`, `<whitespace-token>`,
 *   `<CDO-token>`, `<CDC-token>`, `<colon-token>`, `<semicolon-token>`,
 *   `<comma-token>`, `<[-token>`, `<]-token>`, `<(-token>`, `<)-token>`,
 *   `<{-token>`, and `<}-token>`.
 */

export enum TokenType {
  AtKeyword = "at-keyword",
  BadString = "bad-string",
  BadUrl = "bad-url",
  CDC = "CDC",
  CDO = "CDO",
  Colon = "colon",
  Comma = "comma",
  Delim = "delim",
  Dimension = "dimension",
  Function = "function",
  Hash = "hash",
  Ident = "ident",
  LeftCurlyBracket = "{",
  LeftParen = "(",
  LeftSquareBracket = "[",
  Number = "number",
  Percentage = "percentage",
  RightCurlyBracket = "}",
  RightParen = ")",
  RightSquareBracket = "]",
  Semicolon = "semicolon",
  String = "string",
  UnicodeRange = "unicode-range",
  Url = "url",
  Whitespace = "whitespace",
}
