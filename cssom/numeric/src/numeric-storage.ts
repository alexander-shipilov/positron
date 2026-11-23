/**
 * @public
 */
export class NumericStorage<TTarget extends object, TInternals> {
  readonly #values = new WeakMap<TTarget, TInternals>();

  public get(impl: TTarget, creator: () => TInternals): TInternals {
    let value = this.#values.get(impl);

    if (value == null) {
      this.#values.set(impl, (value = creator()));
    }

    return value;
  }

  public has(key: TTarget): boolean {
    return this.#values.has(key);
  }
}
