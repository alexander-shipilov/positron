import { mount } from "enzyme";
import { Base } from "positron-core";
import React, { Component as ReactComponent } from "react";
import { Component } from "../Component";


describe("Component", () => {
    it("implements React.Component and Base", () => {
        expect(Component.isImplementationOf(ReactComponent, Base));
    });

    describe(".toString", () => {
        it("returns string presentation like [class <ClassName>]", () => {
            expect(Component.toString()).toBe("[class Component]");
            expect(Component.toString(1, 2, 3)).toBe("[class Component <1, 2, 3>]");
        });
    });

    describe("#addUnmountListener", () => {
        const unmountListener = jest.fn();

        class Foo extends Component {
            componentWillMount() {
                this.addUnmountListener(unmountListener);
            }

            render() {
                return null;
            }
        }

        it("adds handler which should be called on unmount", () => {
            mount(<Foo />).unmount();

            expect(unmountListener).toHaveBeenCalled();
        });


        it("should store added handlers to the `onUnmount` prop", () => {
            const foo = new Foo();

            expect(foo.unmountListeners).not.toBeDefined();

            foo.addUnmountListener(unmountListener);
            expect(foo.unmountListeners).toEqual([unmountListener]);

            foo.addUnmountListener(unmountListener);
            expect(foo.unmountListeners).toEqual([unmountListener, unmountListener]);

            foo.componentWillUnmount();
            expect(foo.unmountListeners).not.toBeDefined();
        });
    });

    describe("#toString", () => {
        it("returns string [object <Class>]", () => {
            expect(new Component().toString()).toBe("[object Component]");
        });

        it("supports modifiers", () => {
            expect(new Component().toString(1, 2, 3)).toBe("[object Component <1, 2, 3>]");
        });
    });
});
