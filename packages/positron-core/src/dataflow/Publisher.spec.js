import { Base } from "../Base";
import { Publisher } from "./Publisher";

describe("Publisher", () => {
    it("implements Base", () => {
        expect(Base.isImplementedBy(Publisher)).toBeTruthy();
    });

    describe("#constructor", () => {
        it("creates new Publisher", () => {
            expect(new Publisher()).toBeInstanceOf(Publisher);
        });
    });

    describe("#listeners", () => {
        it("is an array of assigned listeners", () => {
            expect(new Publisher().listeners).toBeInstanceOf(Array);
            expect(new Publisher().listeners).toEqual([]);
        });

        it("should throw on attempt to assign", () => {
            const publisher = new Publisher();

            expect(() => publisher.listeners = [() => void 0]).toThrow();
        });

        it("should not affect to Publisher", () => {
            const publisher = new Publisher();

            publisher.listeners.push(1);
            expect(publisher.listeners).toEqual([]);
        });
    });

    describe("#addListener", () => {
        it("adds the passed listener", () => {
            const publisher = new Publisher();
            const first = () => void 0;
            const second = () => void 0;

            publisher.addListener(first);
            expect(publisher.listeners).toEqual([first]);

            publisher.addListener(second);
            expect(publisher.listeners).toEqual([first, second]);
        });

        it("should return a function to remove the passed listener", () => {
            const publisher = new Publisher();
            const first = () => void 0;
            const removeFirst = publisher.addListener(first);

            expect(removeFirst).toBeInstanceOf(Function);

            removeFirst();
            expect(publisher.listeners).toEqual([]);
        });
    });

    describe("#trigger", () => {
        it("calls all assigned listeners", () => {
            const first = jest.fn();
            const second = jest.fn();
            const publisher = new Publisher();

            publisher.addListener(first);
            publisher.addListener(second);

            expect.assertions(3);
            return publisher.trigger().then((result) => {
                expect(result).toBe(void 0);
                expect(first).toHaveBeenCalled();
                expect(second).toHaveBeenCalled();
            });
         });
    });
});
