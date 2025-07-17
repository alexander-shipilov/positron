import type { NonOptional } from "./non-optional";

/**
 * @public
 */
export type RequiredNonOptional<TType> = Required<{
  [P in keyof TType]: NonOptional<TType[P]>;
}>;
