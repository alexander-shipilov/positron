import type { Example } from "./example";

/**
 * The {@link ExampleClass} represents a call to instantiate {@link Example}
 * interface.
 */
export interface ExampleClass {
  new (...values: string[]): Example;
  from(values: Iterable<string>): Example;
}
