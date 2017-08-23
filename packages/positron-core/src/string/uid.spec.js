import { uid } from "./uid";

describe("uid", () => {
    it("creates unique identifier", () => {
        expect(uid()).toMatch(/^[a-z0-9]+$/);

        const uids = [];
        for (let i = 0; i < 1000; i++) {
            let next = uid();

            expect(uids.every((prev) => prev !== next)).toBeTruthy();
            uids.push(next);
        }
    });

    it("should start with the passed prefix", () => {
        expect(uid("test")).toMatch(/^test/);
    });
});
