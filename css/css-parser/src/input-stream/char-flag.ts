/**
 * @internal
 */
export enum CharFlag {
  // none
  No = 0,
  // non-printable
  Np = 1,
  // whitespace
  Ws = 2,
  // newline
  Nl = 4,
  // digit
  Di = 8,
  // hex-digit
  Hd = 16,
  // letter
  Le = 32,
  // uppercase letter
  Ul = 64,
  // lowercase letter
  Ll = 128,
  // ident
  Id = 256,
  // ident-start
  Is = 512,
  // non-ascii-ident
  In = 1024,
}
