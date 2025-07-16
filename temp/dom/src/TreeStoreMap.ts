/**
 * Internal class to store associated values
 */
export class TreeStoreMap<TObject extends object, TValue> {
  protected map = new WeakMap<TObject, TValue>();

  /**
   * Returns stored props of the passed `target`
   * @param target - Target
   */
  get(target: TObject): TValue {
    const value = this.map.get(target);

    if (value == null) {
      throw new Error("Invalid implementation");
    }

    return value;
  }

  /**
   * Stores the given `props` for the passed `target`
   * @param target - Target
   * @param props - Target props
   */
  set<T extends TObject>(target: T, props: TValue): T {
    this.map.set(target, props);

    return target;
  }
}
