import { isDefined } from "./isDefined";

it("returns true if passed value is not `null` or `undefined`", () => {
    expect(isDefined(null)).toBeFalsy();
    expect(isDefined(void 0)).toBeFalsy();

    expect(isDefined({})).toBeTruthy();
    expect(isDefined(0)).toBeTruthy();
    expect(isDefined("")).toBeTruthy();
    expect(isDefined([])).toBeTruthy();
    expect(isDefined(false)).toBeTruthy();
});
