import { isEmpty } from "./isEmpty";

it("returns true if passed value is null, undefined or has no own properties", () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(void 0)).toBeTruthy();

    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(Object.create({ foo: 1 }))).toBeTruthy();
});
