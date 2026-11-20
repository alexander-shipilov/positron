export type Operations<
  TElement,
  TArity extends number,
  TOperations extends string,
> = {
  readonly [operation in TOperations]: (
    ...args: TElement[] & { length: TArity }
  ) => TElement;
};
