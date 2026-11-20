import type { Any } from "../any/any";

/**
 * The {@link Newable} represents a non-abstract instantiable
 * object.
 *
 * @typeParam TInstance - Type of created instance.
 *
 * @typeParam TArgs - Constructor parameters.
 *
 * @public
 */
export type Newable<TInstance = unknown, TArgs extends Any[] = never[]> = new (
  ...args: TArgs
) => TInstance;
