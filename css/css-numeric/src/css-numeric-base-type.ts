/**
 * The {@link CssNumericBaseType} enumeration represents a possible unit types.
 *
 * @public
 */
export enum CssNumericBaseType {
  /**
   * The units of the {@link CssNumericBaseType.angle} type represent the units
   * denoted by CSS specification as `<angle>`.
   *
   * @see CssAngleUnit
   */
  angle = "angle",

  /**
   * The units of the {@link CssNumericBaseType.flex} type represent the units
   * denoted by CSS specification as `<flex>`.
   *
   * @see CssFlexUnit
   */
  flex = "flex",

  /**
   * The units of the {@link CssNumericBaseType.frequency} type represent the
   * units denoted by CSS specification as `<frequency>`.
   *
   * @see CssFrequencyUnit
   */
  frequency = "frequency",

  /**
   * The units of the {@link CssNumericBaseType.length} type represent the
   * units denoted by CSS specification as `<length>`.
   *
   * The `<length>` unit represents an absolute or relative distance.
   *
   * @see CssLengthUnit
   */
  length = "length",

  /**
   * The units of the {@link CssNumericBaseType.percent} type represent the
   * units denoted by CSS specification as `<percentage>`.
   *
   * @see CssPercentageUnit
   */
  percent = "percent",

  /**
   * The units of the {@link CssNumericBaseType.resolution} type represent the
   * units denoted by CSS specification as `<resolution>`.
   *
   * @see CssResolutionUnit
   */
  resolution = "resolution",

  /**
   * The units of the {@link CssNumericBaseType.time} type represent the units
   * denoted by CSS specification as `<time>`.
   *
   * @see CssTimeUnit
   */
  time = "time",
}
