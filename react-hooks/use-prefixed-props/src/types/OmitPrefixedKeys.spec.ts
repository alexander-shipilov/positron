import { OmitPrefixedKeys } from "./OmitPrefixedKeys";

expectType<OmitPrefixedKeys<"foo", "bar">>("bar");

expectType<OmitPrefixedKeys<"foo", "bar" | "baz">>("bar");
expectType<OmitPrefixedKeys<"foo", "bar" | "baz">>("baz");

expectType<OmitPrefixedKeys<"foo", "foo-bar" | "baz">>("baz");

// @ts-expect-error Argument of type 'string' is not assignable to
// parameter of type 'never'.
expectType<OmitPrefixedKeys<"foo", "foo-bar">>("foo-bar");

expectType<OmitPrefixedKeys<"foo" | "bar", "foo-bar" | "baz">>("baz");

expectType<OmitPrefixedKeys<"foo" | "bar", "bar-ted" | "ted-foo">>("ted-foo");

// @ts-expect-error Argument of type '"bar-ted"' is not assignable
// to parameter of type '"ted-foo"'.
expectType<OmitPrefixedKeys<"foo" | "bar", "bar-ted" | "ted-foo">>("bar-ted");
