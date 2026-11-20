/**
 * @public
 */
export type SpecLiteralArgs<TValue = unknown> = readonly [
  parts: TemplateStringsArray,
  ...values: TValue[],
];
