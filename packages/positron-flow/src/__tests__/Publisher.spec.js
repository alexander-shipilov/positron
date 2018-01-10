import { Base } from "positron-core";
import { Publisher } from "./Publisher";

describe("Publisher", () => {
    let publisher;

    it("implements Base", () => {
        expect(Base.isImplementedBy(Publisher)).toBeTruthy();
    });

    beforeEach(() => {
        publisher = new Publisher();
    });

    describe("#listeners", () => {
        it("is an array of assigned listeners", () => {
            expect(publisher.listeners).toBeInstanceOf(Array);
            expect(publisher.listeners).toEqual([]);
        });

        it("should throw on attempt to assign", () => {
            expect(() => publisher.listeners = [() => void 0]).toThrow();
        });

        it("should not affect to Publisher", () => {
            publisher.listeners.push(1);
            expect(publisher.listeners).toEqual([]);
        });
    });

    describe("#addListener", () => {
        it("adds the passed listener", () => {
            const first = () => void 0;
            const second = () => void 0;

            publisher.addListener(first);
            expect(publisher.listeners).toEqual([first]);

            publisher.addListener(second);
            expect(publisher.listeners).toEqual([first, second]);
        });

        it("should return a function to remove the passed listener", () => {
            const first = () => void 0;
            const removeFirst = publisher.addListener(first);

            expect(removeFirst).toBeInstanceOf(Function);

            removeFirst();
            expect(publisher.listeners).toEqual([]);
        });

        it("should throw if passed arguments is not a function", () => {
            expect(() => publisher.addListener(null)).toThrow("function expected");
            expect(() => publisher.addListener({})).toThrow("function expected");
        });
    });

    describe("#trigger", () => {
        it("calls all assigned listeners", () => {
            const first = jest.fn();
            const second = jest.fn();

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
