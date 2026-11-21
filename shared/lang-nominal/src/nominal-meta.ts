/**
 * @internal
 */
declare const meta: unique symbol;

/**
 * The {@link NominalMeta} class is used to create a more specific type by
 * adding metadata without changing the type itself.
 *
 * @remarks
 *   This class is a type declaration only and has no implementation. It cannot
 *   be used outside of type declarations.
 *
 * @example
 * ```ts
 *  import type { NominalMeta } from "@positron/lang-nominal";
 *
 *  type Foo = { foo: 1 };
 *  type FooWithMeta = Foo & NominalMeta<["some data"]>;
 *
 *  type T1 = keyof Foo extends keyof FooWithMeta ? true : false;
 *  // true
 *
 *  type T2 = keyof FooWithMeta extends keyof Foo ? true : false;
 *  // true
 * ```
 *
 * @typeParam TMeta - The metadata.
 *
 * @sealed
 *
 * @public
 */
export declare class NominalMeta<TMeta extends readonly unknown[]> {
  /**
   * @sealed
   *
   * @internal
   */
  protected readonly [meta]: readonly [...TMeta, ...unknown[]];
}
