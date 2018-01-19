import { Publisher } from "../Publisher";
import { Store } from "../Store";

describe("Store", () => {
    it("implements Publisher", () => {
        expect(Store.isImplementationOf(Publisher)).toBeTruthy();
    });

    describe("#state", () => {
        it("instance of InvariableObject", () => {
            expect(new Store().state).toBe(void 0);
            expect(new Store({ foo: 1 }).state).toBeInstanceOf(Object);
            expect(new Store({ foo: 1 }).state.valueOf()).toEqual({ foo: 1 });
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
