import { randomInt } from "../randomInt";

describe("randomInt", () => {
    it("return random integer from specified range", () => {
        for (let i = 0; i < 1000; i++) {
            const int = randomInt(1, 100);

            expect(int % 1).toBe(0);
            expect(int >= 1 && int <= 100).toBeTruthy();
        }
    });
});
