declare function expect<T>(value: T): void;

/**
 * Объект, ключами которого могут быть только строки
 */
export type Props = { [key: string]: unknown };

/**
 * Возвращает тип массива
 */
export type ArrayType<A extends unknown[]> = A extends Array<infer T>
  ? T
  : never;

expect<ArrayType<["foo", "bar"]>>("foo");
expect<ArrayType<["foo", "bar"]>>("bar");

// @ts-expect-error Argument of type '"ted"' is not assignable to
// parameter of type '"foo" | "bar"'.
expect<ArrayType<["foo", "bar"]>>("ted");

/**
 * Добавляет префикс P к переданному строковому типу K
 */
export type PrefixKey<K extends string, P extends string> = `${P}-${K}`;

expect<PrefixKey<"bar", "foo">>("foo-bar");

expect<PrefixKey<"bar" | "ted", "foo">>("foo-bar");
expect<PrefixKey<"bar" | "ted", "foo">>("foo-ted");

expect<PrefixKey<"ted", "foo" | "bar">>("foo-ted");
expect<PrefixKey<"ted", "foo" | "bar">>("bar-ted");

/**
 * Удаляет префикс P у переданного строкового типа K
 */
export type UnprefixKey<
  K extends string,
  P extends string
> = K extends PrefixKey<infer T, P> ? T : never;

expect<UnprefixKey<"foo-bar" | "foo-ted" | "baz", "foo">>("bar");
expect<UnprefixKey<"foo-bar" | "foo-ted" | "baz", "foo">>("ted");

expect<UnprefixKey<"foo-bar" | "bar-ted", "foo" | "bar">>("bar");
expect<UnprefixKey<"foo-bar" | "bar-ted", "foo" | "bar">>("ted");

/**
 * Удаляет из строкового типа K все типы с префиксом P
 */
export type RemovePrefixedKey<
  K extends string,
  P extends string
> = K extends PrefixKey<infer T, P> ? T & never : K;

expect<RemovePrefixedKey<"foo-bar" | "baz", "foo" | "bar">>("baz");
expect<RemovePrefixedKey<"bar-ted" | "ted-foo", "foo" | "bar">>("ted-foo");

// @ts-expect-error Argument of type '"bar-ted"' is not assignable
// to parameter of type '"ted-foo"'.
expect<RemovePrefixedKey<"bar-ted" | "ted-foo", "foo" | "bar">>("bar-ted");

/**
 * Добавляет всем ключам объекта O префикс P
 */
export type PrefixProps<
  O extends Record<keyof unknown, unknown>,
  P extends string
> = {
  [K in keyof O as K extends string ? PrefixKey<K, P> : K]: O[K];
};

expect<PrefixProps<{ bar: number }, "foo">>({ "foo-bar": 1 });
expect<PrefixProps<{ bar: number; baz: number }, "foo">>({
  "foo-bar": 1,
  "foo-baz": 1,
});

/**
 * Возвращает свойства объекта O, котоые имею префикс P, и удаляет у них префикс
 */
export type UnprefixProps<O extends Props, P extends string> = {
  [K in keyof O as K extends string ? UnprefixKey<K, P> : never]: O[K];
};

expect<UnprefixProps<{ "foo-bar": number }, "foo">>({ bar: 1 });
expect<UnprefixProps<{ "foo-bar": number; ted: number }, "foo">>({ bar: 1 });

/**
 * Удаляет свойства объекта O с префиксом P
 */
export type RemovePrefixedProps<O extends Props, P extends string> = {
  [K in keyof O as K extends string ? RemovePrefixedKey<K, P> : never]: O[K];
};

expect<RemovePrefixedProps<{ baz: number; "foo-bar": number }, "foo">>({
  baz: 1,
});
