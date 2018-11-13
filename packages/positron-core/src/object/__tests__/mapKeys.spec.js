import { mapKeys } from "../mapKeys";

describe("mapKeys", () => {
  it("creates a new object with values returned by passed handler", () => {
    expect(mapKeys({ foo: 1 }, (value) => value)).toEqual({ 1: 1 });
    expect(mapKeys({ foo: 1, bar: 2 }, (value, key) => key + value)).toEqual({ foo1: 1, bar2: 2 });
  });

  it("should call passed function with (`value`, `key`, `target`)", () => {
    const target = { foo: 1 };
    const handler = jest.fn();

    mapKeys(target, handler);

    expect(handler).toHaveBeenCalledWith(1, "foo", target);
  });

  it("should skip not own props", () => {
    const target = Object.create({ foo: 1 });
    const handler = jest.fn();

    mapKeys(target, handler);

    expect(handler).not.toHaveBeenCalled();
  });
});
