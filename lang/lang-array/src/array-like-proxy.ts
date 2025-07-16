import { hasOwnProperty, type PropertyKeyOf } from "@positron/lang-core";

export class ArrayLikeProxy<TValue> implements ArrayLike<TValue> {
  readonly [n: number]: TValue;

  declare readonly length: number;

  constructor(values: ArrayLike<TValue>) {
    return new Proxy(this, {
      get: (target: ArrayLikeProxy<TValue>, key: PropertyKey): unknown =>
        this.isProperty(values, key)
          ? values[key]
          : target[key as keyof ArrayLikeProxy<TValue>],
    });
  }

  protected isProperty<TValues extends ArrayLike<TValue>>(
    values: TValues,
    key: PropertyKey,
  ): key is PropertyKeyOf<TValues> {
    return key === "length" || hasOwnProperty(values, key);
  }
}
