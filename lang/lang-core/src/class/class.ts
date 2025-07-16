/**
 * The {@link Class} represents a non-abstract class which
 * instantiates `unknown` instance.
 *
 * @public
 */
export type Class<
  TInstance = unknown,
  TArgs extends unknown[] = never[],
> = new (...args: TArgs) => TInstance;
