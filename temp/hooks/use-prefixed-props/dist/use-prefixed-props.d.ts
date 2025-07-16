import type { Property } from "@positron/lang";

/**
 * Checks if the passed string `key` has the specified `prefix`
 * @public
 *
 * @example
 * ```ts
 *  isPrefixed('foo-bar', 'foo') // true
 *  isPrefixed('foo-bar', 'baz') // false
 *  isPrefixed('bar', 'foo') // false
 * ```
 *
 * @param key - Property to check
 * @param prefix - Prefix to check
 */
export declare function isPrefixedKey(key: string, prefix: string): boolean;

/**
 * Construct a type with the properties of `TProps` except for those which has
 * prefix `TPrefix` (string literal).
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown }
 *  type ExceptFoo = OmitPrefixed<Props, "foo">
 *  // { foo: unknown }
 * ```
 *
 * @typeParam TProps - Type to omit prefixed props
 * @typeParam TPrefix - String type of prefix
 */
export declare type OmitPrefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as UnprefixedKey<TKey, TPrefix> extends never
    ? TKey
    : never]: TProps[TKey];
};

/**
 * Construct a type with the properties of `TProps` except for those which has
 * prefixes specified by `TPrefixes` (a tuple of string literals).
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type PropsExceptFoo = OmitPrefixedArray<Props, ["foo", "bar"]>
 *  // { foo: unknown }
 * ```
 *
 * @typeParam TProps - Type to omit prefixed props
 * @typeParam TPrefix - Array type of prefixes
 */
export declare type OmitPrefixedArray<TProps, TPrefixes> = TPrefixes extends [
  infer TFirst,
  ...infer TRest,
]
  ? OmitPrefixedArray<OmitPrefixed<TProps, TFirst>, TRest>
  : TProps;

/**
 * Constructs a type by picking the set of properties with prefix specified by
 * `TPrefix` (string literal) from `TProps`.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown }
 *
 *  type FooProps = PickPrefixed<Props, "foo">
 *  // { bar: unknown }
 * ```
 */
export declare type PickPrefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as UnprefixedKey<TKey, TPrefix>]: TProps[TKey];
};

/**
 * Constructs a tuple type by picking the sets of properties with the prefixes
 * specified by `TPrefixes` (a tuple of string literals) from `TProps`.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type FooBarProps = PickPrefixedArray<Props, ["foo", "bar"]>
 *  // [ { bar: unknown }, { baz: unknown } ]
 * ```
 */
export declare type PickPrefixedArray<TProps, TPrefixes> = TPrefixes extends [
  infer TFirst,
  ...infer TRest,
]
  ? [
      PickPrefixed<TProps, TFirst>,
      ...PickPrefixedArray<OmitPrefixed<TProps, TFirst>, TRest>,
    ]
  : [];

/**
 * Prefix type
 * @public
 */
export declare type Prefix = string;

/**
 * Construct a type by adding to the all string keys of `TProps` the prefix
 * specified by `TPrefix` (string literal)
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, bar: unknown }
 *
 *  type BazProps = Prefixed<Props, "baz">
 *  // { "baz-foo": unknown, "baz-bar": unknown }
 * ```
 */
export declare type Prefixed<TProps, TPrefix> = {
  [TKey in keyof TProps as PrefixedKey<TKey, TPrefix>]: TProps[TKey];
};

/**
 * Construct a string type by adding the specified `TPrefix` (string literal)
 * to the given `TKey` (string literal)
 * @public
 *
 * @example
 * ```ts
 *  type BarKey = PrefixedKey<"foo", "bar">
 *  // "bar-foo"
 * ```
 */
export declare type PrefixedKey<
  TKey extends Property,
  TPrefix,
> = TKey extends string
  ? TPrefix extends Prefix
    ? `${TPrefix}-${TKey}`
    : TKey
  : TKey;

/**
 * Constructs a tuple type of `TProps` without specified `TPrefixes` and picked
 * prefixed properties for each prefix specified by the `TPrefixes`.
 * This is a return type of hook {@link usePrefixedProps}.
 * @public
 *
 * @example
 * ```ts
 *  type Props = { foo: unknown, "foo-bar": unknown, "bar-baz": unknown }
 *
 *  type PropsTuple = PrefixedProps<Props, ["foo", "bar"]>
 *  // [ { foo: unknown }, { bar: unknown }, { baz: unknown } ]
 * ```
 *
 * @typeParam TKey - Type to extract prefixed props
 * @typeParam TPrefixes - Prefixes
 */
export declare type PrefixedProps<TProps, TPrefixes extends Prefix[]> = [
  OmitPrefixedArray<TProps, TPrefixes>,
  ...PickPrefixedArray<TProps, TPrefixes>,
];

/**
 * Returns a string literal type by stripping the specified `TPrefix` from
 * literal `TKey` or `never` if `TKey` is not prefixed by the `TPrefix`
 * @public
 *
 * @example
 * ```ts
 *  type FooBarWithoutFoo = UnprefixedKey<"foo-bar", "foo">
 *  // "foo"
 *
 *  type FooBarWithoutBaz = UnprefixedKey<"foo-bar", "baz">
 *  // never
 * ```
 *
 * @typeParam TKey - Key to remove prefix
 * @typeParam TPrefix - Prefix
 */
export declare type UnprefixedKey<TKey extends Property, TPrefix> =
  TKey extends PrefixedKey<infer TUnprefixed, TPrefix> ? TUnprefixed : never;

/**
 * Extract properties prefixed by the specified `prefixes`
 * @public
 *
 * @example
 * ```ts
 *  const props = { foo: 1, "ted-bar": 2 }
 *
 *  console.log(usePrefixedProps(props, 'ted'))
 *  // [ { foo: 1 }, { bar: 2 } ]
 *
 *  console.log(usePrefixedProps(props, 'baz'))
 *  // [ { foo: 1, "ted-bar": 2 }, {} ]
 * ```
 *
 * @example
 * ```tsx
 *  type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
 *    expanded?: boolean
 *  }
 *
 *  function PanelHeader(props: PanelHeaderProps) {
 *    const { expanded, ...divProps } = props;
 *
 *    return (
 *      <div
 *        {...divProps}
 *        className={classnames(divProps.className, { expanded })}
 *      />
 *    )
 *  }
 *
 *  type PanelProps = React.HTMLAttributes<HTMLDivElement> &
 *    Prefixed<Omit<PanelHeaderProps, "children" | "expanded">, "header"> & {
 *      expanded?: boolean,
 *      header?: React.ReactNode
 *    }
 *
 *  function Panel(props: PanelHeaderProps) {
 *    const [
 *      { children, expanded, ...divProps },
 *      headerProps
 *    ] = usePrefixedProps(props, "header")
 *
 *    return (
 *      <div
 *        {...divProps}
 *        className={classnames(divProps.className, { expanded })}
 *      >
 *        <PanelHeader {...headerProps} expanded={expanded}>
 *          {header}
 *        </PanelHeader>
 *        {expanded ? children : null}
 *      </div>
 *    )
 *  }
 *
 *  const panel = (
 *    <Panel
 *      header="My panel"
 *      header-onClick={() => console.log("Header clicked")}
 *    >
 *      Panel content
 *    </Panel>
 *  )
 * ```
 *
 * @param props - Props object
 * @param prefixes - An array of prefixes to extract
 * @returns - Returns an array of props without `prefixes`.
 *    Zero-indexed item contains props which have no one of the specified
 *   `prefixes`
 */
export declare function usePrefixedProps<TProps, TPrefixes extends Prefix[]>(
  props: TProps,
  ...prefixes: TPrefixes
): PrefixedProps<TProps, TPrefixes>;

export {};
