/**
 * The {@link NumericStorage} class provides a `WeakMap`-backed key-value store
 * for associating internal slots or cached values with object instances.
 *
 * @typeParam TTarget - The object key type.
 *
 * @typeParam TInternals - The stored value type.
 *
 * @public
 */
export class NumericStorage<TTarget extends object, TInternals> {
  readonly #values = new WeakMap<TTarget, TInternals>();

  /**
   * The {@link NumericStorage.get} method retrieves the entry associated with
   * `target` or initializes and stores a new entry via `creator`.
   *
   * @param target - The key object whose entry is requested.
   *
   * @param creator - The factory callback invoked when no entry exists yet.
   *
   * @returns The existing or newly created entry for `target`.
   */
  public get(target: TTarget, creator: () => TInternals): TInternals {
    let value = this.#values.get(target);

    if (value == null) {
      this.#values.set(target, (value = creator()));
    }

    return value;
  }

  /**
   * The {@link NumericStorage.has} method checks whether an entry exists for
   * `key`.
   *
   * @param key - The object key to look up.
   *
   * @returns `true` if `key` has an associated entry; otherwise, `false`.
   */
  public has(key: TTarget): boolean {
    return this.#values.has(key);
  }
}
