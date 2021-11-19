import { PickPrefixedKeys } from "./PickPrefixedKeys";

expectType<PickPrefixedKeys<"foo", "foo-bar">>("foo-bar");
expectType<PickPrefixedKeys<"foo", "foo-bar" | "ted">>("foo-bar");

// @ts-expect-error TS2345: Argument of type '"ted"' is not assignable to
// parameter of type '"foo-bar"'.
expectType<PickPrefixedKeys<"foo", "foo-bar" | "ted">>("ted");
