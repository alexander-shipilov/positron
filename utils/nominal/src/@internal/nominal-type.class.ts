/**
 * The {@link tag} constant represents a property key to store nominal
 * tag information.
 *
 * @internal
 */
declare const tag: unique symbol;

/**
 * The {@link NominalType} class contains nominal tag information.
 *
 * @internal
 */
export declare class NominalType<TType extends symbol, TName extends string> {
  private readonly [tag]: [TName | string, TType];
}
