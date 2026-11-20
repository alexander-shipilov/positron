/**
 * @public
 */
export class Registry<TImpl extends object, TValue> {
  readonly #values = new WeakMap<TImpl, TValue>();

  public get(impl: TImpl, creator: () => TValue): TValue {
    let value = this.#values.get(impl);

    if (value == null) {
      this.#values.set(impl, (value = creator()));
    }

    return value;
  }
}
