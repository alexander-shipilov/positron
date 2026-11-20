import type { Example } from "./example";

/**
 * The {@link ExampleImpl} class implements {@link Example} interface
 */
export class ExampleImpl extends Array<string> implements Example {
  public constructor(...items: string[]) {
    super();
    this.push(...items);
  }

  public bar(arg: number): string {
    return arg.toString();
  }

  public foo(): string {
    return "foo";
  }
}
