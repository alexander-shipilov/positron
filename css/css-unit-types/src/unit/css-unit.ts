/**
 * The {@link CssUnit} enumeration represents the identifiers of the supported
 * CSS units.
 *
 * @public
 */
export enum CssUnit {
  /**
   * The {@link CssUnit.cap} unit represents the used `cap-height` of the first
   * available font.
   */
  cap = "cap",

  /**
   * The {@link CssUnit.ch} unit represents the typical advance measure of
   * European alphanumeric characters, and measured as the used advance measure
   * of the `"0"` (ZERO, `U+0030`) glyph in the font used to render it.
   */
  ch = "ch",

  /**
   * The {@link CssUnit.cm} unit represents centimeters:
   * `1cm = 96px / 2.54`.
   */
  cm = "cm",

  /**
   * The {@link CssUnit.cqb} unit represents `1%` of the query container block
   * size.
   */
  cqb = "cqb",

  /**
   * The {@link CssUnit.cqh} unit represents `1%` of the query container
   * height.
   */
  cqh = "cqh",

  /**
   * The {@link CssUnit.cqi} unit represents `1%` of the query container inline
   * size.
   */
  cqi = "cqi",

  /**
   * The {@link CssUnit.cqmax} unit represents `1%` of the query container
   * larger dimension.
   */
  cqmax = "cqmax",

  /**
   * The {@link CssUnit.cqmin} unit represents `1%` of the query container
   * smaller dimension.
   */
  cqmin = "cqmin",

  /**
   * The {@link CssUnit.cqw} unit represents `1%` of the query container width.
   */
  cqw = "cqw",

  /**
   * The {@link CssUnit.deg} unit represents the degrees.
   * There are `360` degrees in a full circle.
   */
  deg = "deg",

  /**
   * The {@link CssUnit.dpcm} represents dots per centimeter.
   */
  dpcm = "dpcm",

  /**
   * The {@link CssUnit.dpi} represents dots per inch.
   */
  dpi = "dpi",

  /**
   * The {@link CssUnit.dppx} represents dots per {@link CssUnit.px} unit.
   */
  dppx = "dppx",

  /**
   * The {@link CssUnit.dvb} unit represents `1%` of the dynamic viewport size
   * along the root element block axis.
   */
  dvb = "dvb",

  /**
   * The {@link CssUnit.dvh} unit represents `1%` of the dynamic viewport
   * height.
   */
  dvh = "dvh",

  /**
   * The {@link CssUnit.dvi} unit represents `1%` of the dynamic viewport size
   * along the root element inline axis.
   */
  dvi = "dvi",

  /**
   * The {@link CssUnit.dvmax} unit represents `1%` of the dynamic viewport
   * larger dimension.
   */
  dvmax = "dvmax",

  /**
   * The {@link CssUnit.dvmin} unit represents `1%` of the dynamic viewport
   * smaller dimension.
   */
  dvmin = "dvmin",

  /**
   * The {@link CssUnit.dvw} unit represents `1%` of the dynamic viewport width.
   */
  dvw = "dvw",

  /**
   * The {@link CssUnit.em} unit represents the computed value of the
   * `font-size` property of the element on which it is used.
   */
  em = "em",

  /**
   * The {@link CssUnit.ex} unit represents the `x-height` of the first
   * available font.
   */
  ex = "ex",

  /**
   * The {@link CssUnit.fr} unit represents the fraction of the leftover space
   * in the grid container.
   */
  fr = "fr",

  /**
   * The {@link CssUnit.grad} unit represents gradians, also known as "gons" or
   * "grades". There are `400` gradians in a full circle.
   */
  grad = "grad",

  /**
   * The {@link CssUnit.hz} unit represents hertz - the number of occurrences
   * per second.
   */
  hz = "hz",

  /**
   * The {@link CssUnit.ic} unit represents the typical advance measure of CJK
   * letters, and measured as the used advance measure of the “水” (CJK water
   * ideograph, `U+6C34`) glyph found in the font used to render it.
   */
  ic = "ic",

  /**
   * The {@link CssUnit.in} units represents inches:
   * `1in = 2.54cm = 96px`.
   */
  in = "in",

  /**
   * The {@link CssUnit.khz} unit represents kiloHertz.
   * A kiloHertz is `1000` Hertz.
   */
  khz = "khz",

  /**
   * The {@link CssUnit.lh} unit represents the computed value of the
   * `line-height` property of the element on which it is used, converting
   * normal to an absolute length by using only the metrics of the first
   * available font.
   */
  lh = "lh",

  /**
   * The {@link CssUnit.lvb} unit represents `1%` of the large viewport size
   * along the root element block axis.
   */
  lvb = "lvb",

  /**
   * The {@link CssUnit.lvh} unit represents `1%` of the large viewport height.
   */
  lvh = "lvh",

  /**
   * The {@link CssUnit.lvi} unit represents `1%` of the large viewport size
   * along the root element inline axis.
   */
  lvi = "lvi",

  /**
   * The {@link CssUnit.lvmax} unit represents `1%` of the large viewport larger
   * dimension.
   */
  lvmax = "lvmax",

  /**
   * The {@link CssUnit.lvmin} unit represents `1%` of the large viewport
   * smaller dimension.
   */
  lvmin = "lvmin",

  /**
   * The {@link CssUnit.lvw} unit represents `1%` of the large viewport width.
   */
  lvw = "lvw",

  /**
   * The {@link CssUnit.mm} unit represents millimeters:
   * `1mm = 1 / 10th of 1cm`.
   */
  mm = "mm",

  /**
   * The {@link CssUnit.ms} unit represents milliseconds.
   * There are `1000` milliseconds in a second.
   */
  ms = "ms",

  /**
   * The {@link CssUnit.pc} unit represents picas:
   * `1pc = 1 / 6th of 1in`.
   */
  pc = "pc",

  /**
   * The {@link CssUnit.pt} unit represents points.
   * `1pt = 1 / 72nd of 1in`.
   */
  pt = "pt",

  /**
   * The {@link CssUnit.px} unit represents reference pixels:
   * `1px = 1 / 96th of 1in`
   */
  px = "px",

  /**
   * The {@link CssUnit.q} unit represents quarter-millimeters:
   * `1q = 1 / 40th of 1cm`.
   */
  q = "q",

  /**
   * The {@link CssUnit.rad} unit represents radians.
   * There are `2π` radians in a full circle.
   */
  rad = "rad",

  /**
   * The {@link CssUnit.rcap} unit represents the value of the
   * {@link CssUnit.cap} unit on the root element.
   */
  rcap = "rcap",

  /**
   * The {@link CssUnit.rch} unit represents the value of the
   * {@link CssUnit.ch} unit on the root element.
   */
  rch = "rch",

  /**
   * The {@link CssUnit.rem} unit represents the computed value of the
   * {@link CssUnit.em} unit on the root element.
   */
  rem = "rem",

  /**
   * The {@link CssUnit.rex} unit represents the value of the
   * {@link CssUnit.ex} unit on the root element.
   */
  rex = "rex",

  /**
   * The {@link CssUnit.ric} unit represents the value of the
   * {@link CssUnit.ic} unit on the root element.
   */
  ric = "ric",

  /**
   * The {@link CssUnit.rlh} unit represents the value of the
   * {@link CssUnit.lh} unit on the root element.
   */
  rlh = "rlh",

  /**
   * The {@link CssUnit.s} unit represents seconds.
   */
  s = "s",

  /**
   * The {@link CssUnit.svb} unit represents `1%` of the small viewport size
   * along the root element block axis.
   */
  svb = "svb",

  /**
   * The {@link CssUnit.svh} unit represents `1%` of the small viewport height.
   */
  svh = "svh",

  /**
   * The {@link CssUnit.svi} unit represents `1%` of the small viewport size
   * along the root element inline axis.
   */
  svi = "svi",

  /**
   * The {@link CssUnit.svmax} unit represents `1%` of the small viewport
   * larger dimension.
   */
  svmax = "svmax",

  /**
   * The {@link CssUnit.svmin} unit represents `1%` of the small viewport
   * smaller dimension.
   */
  svmin = "svmin",

  /**
   * The {@link CssUnit.svw} unit represents `1%` of the small viewport width.
   */
  svw = "svw",

  /**
   * The {@link CssUnit.turn} unit represents turns.
   * There is `1` turn in a full circle.
   */
  turn = "turn",

  /**
   * The {@link CssUnit.vb} unit represents `1%` of the viewport size along the
   * root element block axis.
   */
  vb = "vb",

  /**
   * The {@link CssUnit.vh} unit represents `1%` of the viewport height.
   */
  vh = "vh",

  /**
   * The {@link CssUnit.vi} unit represents `1%` of the viewport size along the
   * root element inline axis.
   */
  vi = "vi",

  /**
   * The {@link CssUnit.vmax} unit represents `1%` of the viewport larger
   * dimension.
   */
  vmax = "vmax",

  /**
   * The {@link CssUnit.vmin} unit represents `1%` of the viewport smaller
   * dimension.
   */
  vmin = "vmin",

  /**
   * The {@link CssUnit.vw} unit represents `1%` of the viewport width.
   */
  vw = "vw",

  /**
   * The {@link CssUnit.x} unit is alias to {@link CssUnit.dppx}.
   */
  x = "x",
}
