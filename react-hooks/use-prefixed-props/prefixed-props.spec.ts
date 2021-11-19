import { prefixedProps } from "./prefixed-props";

it("should return the correct value", () => {
  expect(prefixedProps()).toBe("Hello world!");
});
