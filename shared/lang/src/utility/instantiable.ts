import type { Any } from "../any/any";

/**
 * The {@link Instantiable} represents an object that has `new ()` signature and
 * therefore can instantiate object.
 *
 * @typeParam TInstance - Type of created instance.
 *
 * @typeParam TArgs - Constructor parameters.
 *
 * @public
 */
export type Instantiable<
  TInstance = unknown,
  TArgs extends Any[] = never[],
> = abstract new (...args: TArgs) => TInstance;
