import { getAncestorOf } from "../getAncestorOf";

it("returns an object which the given object was created from", () => {
  const foo = { foo: 1 };

  expect(getAncestorOf(Object.create(foo))).toBe(foo);
});

it("should return null if the given object was not created from another one", () => {
  const foo = { foo: 1 };

  expect(getAncestorOf(foo)).toBeNull();
});


it("should throw an error if was called without arguments", () => {
  expect(() => getAncestorOf()).toThrow();
});
