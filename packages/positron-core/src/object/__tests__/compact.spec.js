import { compact } from "../compact";

it("returns an object which contains values of all enumerable own properties from given objects' primitives", () => {
  const foo = { foo: 1 };
  const bar = { bar: 2 };
  const ted = {
    quux: 1,
    valueOf() {
      return { ted: 3 };
    }
  };

  expect(compact(foo, bar, ted)).toEqual({ foo: 1, bar: 2, ted: 3 });
});

it("should return a object", () => {
  const foo = { foo: 1 };

  expect(compact(foo)).not.toBe(foo);
});

it("should return an empty object if was called without arguments", () => {
  expect(compact()).toEqual({});
});

it("should return an empty object if all passed args are not defined", () => {
  expect(compact(null, void 0)).toEqual({});
});
