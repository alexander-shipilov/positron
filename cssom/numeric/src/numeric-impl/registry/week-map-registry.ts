import type { Registry } from "./registry";

/**
 * @public
 */
export class WeekMapRegistry<TOwner extends object, TValue> implements Registry<
  TOwner,
  TValue
> {
  readonly #values = new WeakMap<TOwner, TValue>();

  public get(impl: TOwner, creator: () => TValue): TValue {
    let value = this.#values.get(impl);

    if (value == null) {
      this.#values.set(impl, (value = creator()));
    }

    return value;
  }

  public has(key: TOwner): boolean {
    return this.#values.has(key);
  }
}
