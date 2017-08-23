import { InvariableObject } from "../invariable";
import { Action } from "./Action";
import { Publisher } from "./Publisher";
import { Store } from "./Store";

describe("Store", () => {
    it("implements Publisher", () => {
        expect(Publisher.isImplementedBy(Store)).toBeTruthy();
    });

    describe("#state", () => {
        it("instance of InvariableObject", () => {
            expect(new Store().state).toBe(void 0);
            expect(new Store({ foo: 1 }).state).toBeInstanceOf(InvariableObject);
        });
    });

    describe("#listen", () => {
        it("adds a listener to the given publisher", () => {
            const action = new Action();
            const store = Object.assign(new Store(), { handler: jest.fn() });

            store.listen(action, "handler");
            expect(action.listeners.length).toBe(1);

            return action.trigger().then(() => {
                expect(store.handler).toHaveBeenCalled();
            });
        });
    });

    describe("#listenAll", () => {
        it("adds listeners to the all publishers", () => {
            const actions = { handler: new Action() };
            const store = Object.assign(new Store(), { handler: jest.fn() });

            store.listenAll(actions);
            expect(actions.handler.listeners.length).toBe(1);

            return actions.handler.trigger().then(() => {
                expect(store.handler).toHaveBeenCalled();
            });
        });
    });
});
