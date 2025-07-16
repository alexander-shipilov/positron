import { assert, ownKeys } from "@positron/lang";

import { isPrefixedKey } from "./isPrefixedKey";

import type { Prefix, PrefixedProps } from "./types";

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
 *  type ExpandedProps = {
 *    className?: string
 *  }
 *
 *  type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement>
 *    & Prefixed<ExpandedProps, "expanded"> & {
 *    expanded?: boolean
 *  }
 *
 *  function PanelHeader(props: PanelHeaderProps) {
 *    const [divProps, expandedProps] = usePrefixedProps(props, "expanded");
 *
 *    const className = classnames(
 *      divProps.className,
 *      expanded ? expandedProps.className : null
 *    )
 *
 *    return (
 *      <div {...divProps} className={className} />
 *    )
 *  }
 *
 *  type PanelProps = React.HTMLAttributes<HTMLDivElement> &
 *    Prefixed<Omit<PanelHeaderProps, "children" | "expanded">, "header"> &
 *    Prefixed<ExpandedProps, "header"> & {
 *      expanded?: boolean,
 *      header?: React.ReactNode
 *    }
 *
 *  function Panel(props: PanelProps) {
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
 * @returns Returns an array of props without `prefixes`.
 *    Zero-indexed item contains props which have no one of the specified
 *   `prefixes`
 */
export function usePrefixedProps<TProps, TPrefixes extends Prefix[]>(
  props: TProps,
  ...prefixes: TPrefixes
): PrefixedProps<TProps, TPrefixes> {
  assert(props != null, () => new TypeError("Unable to unprefix `nullable`"));

  return ownKeys(props).reduce(
    (unprefixed, key) => {
      const index = prefixes.findIndex((prefix: string) =>
        isPrefixedKey(key, prefix),
      );

      (unprefixed[index + 1] as Record<string, unknown>)[
        index === -1 ? key : key.substring(prefixes[index].length + 1)
      ] = props[key];

      return unprefixed;
    },
    [{}, ...prefixes.map(() => ({}))] as PrefixedProps<TProps, TPrefixes>,
  );
}
