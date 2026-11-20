/**
 * @public
 */
export type CodeArgs<TValue = unknown> = readonly [
  parts: TemplateStringsArray,
  ...values: TValue[],
];
