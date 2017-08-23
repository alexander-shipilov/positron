import { nvl } from "./nvl";

it("returns value if it is defined and substitute otherwise", () => {
    expect(nvl(void 0, 1)).toEqual(1);
    expect(nvl(null, 1)).toEqual(1);
    expect(nvl(0, 1)).toEqual(0);
});
