/**
 * The {@link ReactVoid} component returns nothing.
 *
 * @public
 */
export function ReactVoid<TProps = never>(props: TProps): undefined {
  return void props;
}
