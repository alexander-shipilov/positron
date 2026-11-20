import type { Comparable } from "./comparable";
import type { Domain } from "./domain";
import type { Monoid } from "./monoid";
import { Symbols } from "./symbols";

interface AddSemigroup<TElement>
  extends
    Comparable<TElement>,
    Monoid<TElement, "add" | "mul", "one" | "zero"> {}

declare const d: Domain<number>;
export declare const t: AddSemigroup<number>;

t.add(1, 2);
t.zero.toExponential();
t.one.toExponential();

t[Symbols.cmp](1, 2);
t[Symbols.eq](1, 2);
t[Symbols.is](1);
