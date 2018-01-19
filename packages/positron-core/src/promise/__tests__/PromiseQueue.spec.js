import { Base } from "../../Base";
import { PromiseQueue } from "../PromiseQueue";

describe("PromiseQueue", () => {
    it("implements Base", () => {
        expect(PromiseQueue.isImplementationOf(Base)).toBeTruthy();
    });

    describe("#resolve", () => {
        it("returns a promise", () => {
            const queue = new PromiseQueue();

            expect(queue.resolve()).toBeInstanceOf(Promise);
        });

        it("should accept a promise", () => {
            const queue = new PromiseQueue();

            expect.assertions(2);

            return Promise.all([
                queue.resolve(Promise.resolve("resolved")).then((value) => expect(value).toBe("resolved")),
                queue.resolve(Promise.reject("rejected")).catch((value) => expect(value).toBe("rejected"))
            ]);
        });

        it("should accept any value", () => {
            const queue = new PromiseQueue();

            expect.assertions(1);

            return queue.resolve("resolved").then((value) => expect(value).toBe("resolved"));
        });
    });

    describe("#then", () => {
        it("creates new PromiseQueue referenced to the current queue", () => {
            const queue = new PromiseQueue();
            const next = queue.then(() => 1);

            expect(next).not.toBe(queue);
            expect(next).toBeInstanceOf(PromiseQueue);
            expect(next.prev).toBe(queue);
        });

        it("should return current queue if both of passed params are undefined", () => {
            const queue = new PromiseQueue();

            expect(queue.then()).toBe(queue);
        });

        it("should add", () => {
            const listener1 = jest.fn().mockReturnValue(42);
            const listener2 = jest.fn().mockReturnValue(43);

            const queue = new PromiseQueue(listener1).then(listener2);

            expect.assertions(3);

            return queue.resolve(41).then((value) => {
                expect(listener1).toHaveBeenCalledWith(41);
                expect(listener2).toHaveBeenCalledWith(42);
                expect(value).toBe(43);
            });
        });
    });
});
