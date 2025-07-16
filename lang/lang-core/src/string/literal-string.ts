/**
 * The {@link LiteralString} type represents the general type of the _specific
 * strings_. Any string defined as a literal conforms to this type, but the
 * general type `string` does not.
 *
 * This means that the {@link LiteralString} type is a more specific type than
 * the `string` type, so:
 *  - anything that requires a `string` also accepts a `LiteralString`
 *  - anything that requires a `LiteralString` accepts any literal string, but
 *    not the general type `string`.
 *
 * @example
 * The following example illustrates this.
 * ```ts
 *  type ExpectString<S extends string> = S;
 *
 *  type T1 = ExpectString<"foo">;
 *  type T2 = ExpectString<string>;
 *  type T3 = ExpectString<LiteralString>;
 *  // OK
 *
 *  type ExpectLiteralString<S extends LiteralString> = S;
 *
 *  type T4 = ExpectLiteralString<"foo">;
 *  type T5 = ExpectLiteralString<LiteralString>;
 *  // OK
 *
 *  type T6 = ExpectLiteralString<string>;
 *  // Error: TS2344: Type `string` does not satisfy constraint...
 * ```
 *
 * @remarks
 * The {@link LiteralString} type exploits a flaw in the TS type system. The
 * current version of TS considers the following declaration (necessarily
 * enclosed in a literal template) to be unequal to the `string` type:
 *
 * ```ts
 * `${string & { readonly length: number }}`
 * ```
 *
 * This is clearly incorrect behavior, since the intersection of the type
 * `string` and `{ readonly length: number }` is the exact `string` type.
 * Furthermore, this type declaration, when not enclosed in a literal template,
 * works as expected.
 *
 * The following code demonstrates this:
 * ```ts
 *  const s1: string & { readonly length: number } = "" as string;
 *  // OK
 *
 *  const s2: `${string & { readonly length: number }}` = "" as string;
 *  // Error: TS2322: Type string is not assignable to type
 *  // `${string & { readonly length: number; }}`
 * ```
 *
 * This may be fixed in a future version of TS.
 * Perhaps the TS developers will add an intrinsic `literal string` type, like
 * they did with `unique symbol` in TS 2.7.
 * Who knows :)
 *
 * @public
 * @experimental
 */
export type LiteralString = `${string & { readonly length: number }}`;
