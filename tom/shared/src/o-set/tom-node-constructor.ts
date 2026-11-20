import type { TomNode } from "./tom-node";

/**
 * The {@link TomNodeConstructor} interface is a class for creating instances
 * of the {@link TomNode} interface.
 *
 * @public
 */
export interface TomNodeConstructor {
  new <TValue>(value: TValue): TomNode<TValue>;
}
