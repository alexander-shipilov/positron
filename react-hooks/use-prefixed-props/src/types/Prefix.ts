/**
 * Prefix string `T` by `P`
 */
export type Prefix<P extends string, T extends string> = `${P}-${T}`;

type Last<T extends any[]> = T extends [...unknown[], infer U] ? U : never;

type Rest<T extends any[]> = T extends [...infer U, unknown] ? U : never;

expectType<Last<["any"]>>("any");
expectType<Last<["foo", "any"]>>("any");

expectType<Rest<["foo", "any"]>>(["foo"]);
expectType<Rest<["foo", "bar", "any"]>>(["foo", "bar"]);

type F<P extends [...string[], string], T extends string> =
  // no-format
  Rest<P> extends [...string[], string]
    ? F<Rest<P>, `${Last<P>}-${T}`>
    : `${Last<P>}-${T}`;

expectType<F<["foo", "bar"], "ted">>("foo-bar-ted");
