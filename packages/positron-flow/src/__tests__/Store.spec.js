import { Action } from "../Action";
import { Publisher } from "../Publisher";
import { Store } from "../Store";

describe("Store", () => {
    it("implements Publisher", () => {
        expect(Publisher.isImplementedBy(Store)).toBeTruthy();
    });

    describe("#state", () => {
        it("instance of InvariableObject", () => {
            expect(new Store().state).toBe(void 0);
            expect(new Store({ foo: 1 }).state).toBeInstanceOf(Object);
            expect(new Store({ foo: 1 }).state.valueOf()).toEqual({ foo: 1 });
        });
    });

    describe("#listen", () => {
        it("adds a listener to the given publisher", () => {
            const action = new Action();
            const store = Object.assign(new Store(), { doAction: jest.fn() });

            store.listen(action, "doAction");
            expect(action.listeners.length).toBe(1);

            return action.trigger().then(() => {
                expect(store.doAction).toHaveBeenCalled();
            });
        });

        it("should not add listeners if store has no specified handler", () => {
            const action = new Action();
            const store = new Store();

            store.listen(action, "doAction");
            expect(action.listeners.length).toBe(0);
        });
    });

    describe("#listenAll", () => {
        it("adds listeners to the all passed publishers", () => {
            const actions = { handler: new Action() };
            const store = Object.assign(new Store(), { handler: jest.fn() });

            store.listenAll(actions);
            expect(actions.handler.listeners.length).toBe(1);

            return actions.handler.trigger().then(() => {
                expect(store.handler).toHaveBeenCalled();
            });
        });
    });

    describe("#setState", () => {
        let store;
        let initialState;

        beforeEach(() => {
            store = new Store({ foo: 1 });
            initialState = store.state;
        });

        it("returns a promise", () => {
            expect(store.setState({ foo: 2 })).toBeInstanceOf(Promise);
        });

        it("updates an internal state", () => {
            return store.setState({ foo: 2 }).then(() => {
                expect(store.state !== initialState).toBeTruthy();
                expect(store.state.valueOf()).toEqual({ foo: 2 });
            });
        });

        it("promise argument should be a next state", () => {
            return store.setState({ foo: 2 }).then((state) => {
                expect(state).toBe(store.state);
                expect(state).not.toBe(initialState);
                expect(state.valueOf()).toEqual({ foo: 2 });
            });
        });

        it("promise should be resolved when all listeners are called", () => {
            const listener1 = jest.fn();
            const listener2 = jest.fn();

            store.addListener(listener1);
            store.addListener(listener2);

            return store.setState({ foo: 2 }).then((nextState) => {
                store.listeners.forEach((listener) => {
                    expect(listener).toHaveBeenCalled();
                    expect(listener).toHaveBeenCalledWith(nextState);
                });
            });
        });

        it("listeners should not be called if state was not changed", () => {
            const listener = jest.fn();

            store.addListener(listener);

            return store.setState({ foo: 1 }).then((state) => {
                expect(state).toBe(initialState);
                expect(listener).not.toHaveBeenCalled();
            });
        });
    });
});
