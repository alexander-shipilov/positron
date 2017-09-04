import { mount } from "enzyme";
import React, { Component, PureComponent } from "react";
import { isImplementationOf } from "../func";
import { map } from "../object";
import { connect, ConnectedComponent } from "./connect";
import { Store } from "./Store";

describe("ConnectedComponent", () => {
    it("implements PureComponent", () => {
        expect(isImplementationOf(ConnectedComponent, PureComponent)).toBeTruthy();
    });

    describe(".connectedStores", () => {
        it("is an empty object by default", () => {
            expect(ConnectedComponent.connectedStores).toEqual({});
        });
    });

    describe(".connectedProps", () => {
        it("is an empty object by default", () => {
            expect(ConnectedComponent.connectedProps).toEqual({});
        });
    });

    describe(".toString", () => {
        it("returns a list of connected stores and props", () => {
            expect(ConnectedComponent.toString()).toEqual("[class ConnectedComponent <{}, {}>]");
        });
    });
});

describe("connect", () => {
    class Foo extends Component {
        render() {
            return <div />;
        }
    }

    let ConnectedFoo;
    let stores;
    let props;
    let initialState;

    beforeEach(() => {
        stores = { data: new Store({ foo: 1, bar: 2 }) };
        props = { baz: 3 };
        initialState = map(stores, ({ state }) => state);

        ConnectedFoo = connect(Foo, stores, props);
    });

    it("returns a new component connected to the passed stores and props", () => {
        expect(ConnectedFoo).not.toBe(Component);
        expect(isImplementationOf(ConnectedFoo, ConnectedComponent)).toBeTruthy();
    });

    it("should throw an error if one or more passed objects is not a Store", () => {
        expect(() => connect(Component, { data: null })).toThrow();
    });

    it("should define props `connectedStores` and `connectedProps`", () => {
        expect(ConnectedFoo.connectedStores).toEqual(stores);
        expect(ConnectedFoo.connectedProps).toEqual(props);
    });

    it("should return the passed component if one already connected", () => {
        const nextStores = { next: new Store() };
        const nextProps = { bar: 1 };

        expect(connect(ConnectedFoo, nextStores, nextProps)).toBe(ConnectedFoo);
        expect(ConnectedFoo.connectedStores).toEqual(Object.assign({}, stores, nextStores));
        expect(ConnectedFoo.connectedProps).toEqual(Object.assign({}, props, nextProps));
    });

    describe("ConnectedComponent", () => {
        let foo;
        let setState;

        beforeEach(() => {
            foo = mount(<ConnectedFoo ted={ 4 } />);
            setState = jest.spyOn(foo.instance(), "setState");
        });

        afterEach(() => {
            foo.unmount();
            setState.mockRestore();
        });

        describe(".toString", () => {
            it("returns a list of connected stores and props", () => {
                expect(ConnectedFoo.toString())
                    .toBe("[class Connected <{ data: [object Store <InvariableObject>] }, { baz: 3 }>]");
            });
        });

        describe("#componentWillMount", () => {
            it("should set `connected` prop and add listeners", () => {
                expect(foo.getNode().connected).toBeTruthy();
            });

            it("should add listeners to the given stores", () => {
                expect(stores.data.listeners.length).toBe(1);
            });
        });

        describe("#componentWillUnmount", () => {
            it("should reset `connected` prop", () => {
                foo.unmount();
                expect(foo.getNode().connected).toBeUndefined();
            });

            it("should remove all listeners", () => {
                foo.unmount();
                expect(stores.data.listeners.length).toBe(0);

                return stores.data.setState({ foo: 2 }).then(() => {
                    expect(setState).not.toHaveBeenCalled();
                });
            });
        });

        describe("#render", () => {
            it("renders original component", () => {
                expect(foo.find(Foo).length).toBe(1);
            });

            it("should pass current state to the underlying component", () => {
                expect(foo.find(Foo).props()).toEqual(foo.state());
            });
        });

        describe("#state", () => {
            it("should contain initial state of connected stores, connected props and the instance props", () => {
                expect(foo.state()).toEqual(Object.assign({}, initialState, props, foo.instance().props));
            });

            it("should be updated if store updated", () => {
                return stores.data.setState({ foo: 2 }).then((nextState) => {
                    expect(foo.state()).toEqual(Object.assign({ data: nextState }, props, foo.instance().props));
                });
            });

            it("should be updated if store updated", () => {
                return stores.data.setState({ foo: 2 }).then((nextState) => {
                    expect(setState).toHaveBeenCalled();
                    expect(setState).toHaveBeenCalledWith({ data: nextState });

                    expect(foo.state()).toEqual(Object.assign({ data: nextState }, props, foo.instance().props));
                });
            });
        });
    });
});
