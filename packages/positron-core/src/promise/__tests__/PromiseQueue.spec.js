import { Base } from "../../Base";
import { PromiseQueue } from "../PromiseQueue";

describe("PromiseQueue", () => {
    it("implements ImmutableObject", () => {
        expect(Base.isImplementedBy(PromiseQueue)).toBeTruthy();
    });

    describe("#then", () => {
        it("creates new PromiseQueue referenced to the current queue", () => {
            const queue = new PromiseQueue();
            const next = queue.next();

            expect(next).not.toBe(queue);
            expect(next).toBeInstanceOf(PromiseQueue);
            expect(next.prev).toBe(queue);
        });
    });

    describe("#resolve", () => {
        it("returns a promise", () => {
            const queue = new PromiseQueue();

            return queue.resolve(Promise.resolve("resolve value")).then((value) => {
                expect(value).toBe("resolve value");
            });
        });
    });
});
