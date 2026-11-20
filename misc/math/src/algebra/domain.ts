import { Symbols } from "./symbols";

export interface Domain<TElement> {
  [Symbols.eq](value1: TElement, value2: TElement): boolean;

  [Symbols.is](input: unknown): input is TElement;
}
