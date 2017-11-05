import { mount, shallow } from "enzyme";
import React, { Component as ReactComponent } from "react";

import { Base } from "../../positron-core/src/Base";
import { PropTypes } from "../../positron-prop-types/src/index";
import { Component } from "./Component";


describe("Component", () => {
    it("implements React.Component and Base", () => {
        expect(Component.isImplementationOf(ReactComponent, Base));
    });

    describe(".initDefaultProps", () => {
        it("applies passed props to the .defaultProps", () => {
            class Foo extends Component {
            }

            Foo.initDefaultProps({ foo: 1 });
            expect(Foo.defaultProps).toEqual({ foo: 1 });

            Foo.initDefaultProps({ bar: 2 });
            expect(Foo.defaultProps).toEqual({ foo: 1, bar: 2 });
        });

        it("should copy props from superclass", () => {
            class Foo extends Component {
            }

            class Bar extends Foo {
            }

            Foo.initDefaultProps({ foo: 1 });
            Bar.initDefaultProps({ bar: 2 });

            expect(Foo.defaultProps).toEqual({ foo: 1 });
            expect(Bar.defaultProps).toEqual({ foo: 1, bar: 2 });
        });

        it("should return self", () => {
            class Foo extends Component {
            }

            expect(Foo.initDefaultProps({ foo: 1 })).toBe(Foo);
        });
    });

    describe(".propTypes", () => {
        it("should copy prop types from superclass", () => {
            class Foo extends Component {
                static propTypes = { foo: PropTypes.number };
            }

            class Bar extends Foo {
                static propTypes = { bar: PropTypes.number };
            }

            expect(Foo.propTypes).toEqual({ foo: PropTypes.number });
            expect(Bar.propTypes).toEqual({ foo: PropTypes.number, bar: PropTypes.number });
        });
    });

    describe(".initPropTypes", () => {
        it("applies passed props to the .propTypes", () => {
            class Foo extends Component {
            }

            Foo.initPropTypes({ foo: PropTypes.number });
            expect(Foo.propTypes).toEqual({ foo: PropTypes.number });

            Foo.initPropTypes({ bar: PropTypes.number });
            expect(Foo.propTypes).toEqual({ foo: PropTypes.number, bar: PropTypes.number });
        });

        it("should copy prop types from superclass", () => {
            class Foo extends Component {
            }

            class Bar extends Foo {
            }

            Foo.initPropTypes({ foo: PropTypes.number });
            Bar.initPropTypes({ bar: PropTypes.number });

            expect(Foo.propTypes).toEqual({ foo: PropTypes.number });
            expect(Bar.propTypes).toEqual({ foo: PropTypes.number, bar: PropTypes.number });
        });

        it("should return self", () => {
            class Foo extends Component {
            }

            expect(Foo.initPropTypes({ foo: PropTypes.number })).toBe(Foo);
        });
    });

    describe(".implement", () => {
        it("implements mixin", () => {
            class Mixin {
            }

            class Foo extends Component.implement(Mixin) {
            }

            expect(Foo.isImplementationOf(Component, Mixin)).toBeTruthy();
        });

        it("should copy propTypes and defaultProps", () => {
            class Mixin {
                static propTypes = { foo: PropTypes.number };

                static defaultProps = { foo: 0 };
            }

            class Foo extends Component.implement(Mixin) {
            }

            Foo.initPropTypes({ bar: PropTypes.number }).initDefaultProps({ bar: 1 });

            expect(Foo.propTypes).toEqual({ foo: PropTypes.number, bar: PropTypes.number });
            expect(Foo.defaultProps).toEqual({ foo: 0, bar: 1 });
        });

        it("should override life cycle method if one is specified", () => {
            class Foo extends Component {
                componentWillMount() {
                }
            }

            class Mixin {
                componentWillMount() {
                }

                componentDidMount() {
                }
            }

            class Bar extends Foo.implement(Mixin) {
            }

            const { componentDidMount, componentWillMount, componentWillUpdate } = Bar.prototype;

            expect(componentWillMount).toBeDefined();
            expect(componentWillMount).not.toBe(Foo.prototype.componentWillMount);
            expect(componentWillMount).not.toBe(Mixin.prototype.componentWillMount);

            expect(componentDidMount).toBeDefined();
            expect(componentDidMount).not.toBe(Mixin.prototype.componentDidMount);

            expect(componentWillUpdate).not.toBeDefined();
        });

        it("should call mixin live cycle props", () => {
            class Mixin {
            }

            Mixin.prototype = {
                componentDidMount: jest.fn(),
                componentDidUpdate: jest.fn(),
                componentWillMount: jest.fn(),
                componentWillReceiveProps: jest.fn(),
                componentWillUnmount: jest.fn(),
                componentWillUpdate: jest.fn()
            };

            class Foo extends Component.implement(Mixin) {
                constructor(...args) {
                    super(...args);
                    this.initState({ ted: "ted" });
                }

                render() {
                    return null;
                }
            }

            const {
                componentDidMount,
                componentDidUpdate,
                componentWillMount,
                componentWillReceiveProps,
                componentWillUnmount,
                componentWillUpdate
            } = Mixin.prototype;

            mount(<Foo foo="foo" />).setProps({ bar: "bar" }).unmount();

            expect(componentWillMount).toHaveBeenCalled();
            expect(componentDidMount).toHaveBeenCalled();

            expect(componentWillReceiveProps).toHaveBeenCalled();
            expect(componentWillReceiveProps).toHaveBeenCalledWith({ foo: "foo", bar: "bar" }, {});

            expect(componentWillUpdate).toHaveBeenCalled();
            expect(componentWillUpdate).toHaveBeenCalledWith({ foo: "foo", bar: "bar" }, { ted: "ted" }, {});

            expect(componentDidUpdate).toHaveBeenCalled();
            expect(componentDidUpdate).toHaveBeenCalledWith({ foo: "foo" }, { ted: "ted" }, {});

            expect(componentWillUnmount).toHaveBeenCalled();
        });
    });


    describe(".toString", () => {
        it("returns string presentation like [class <ClassName>]", () => {
            expect(Component.toString()).toBe("[class Component]");
            expect(Component.toString(1, 2, 3)).toBe("[class Component <1, 2, 3>]");
        });
    });

    describe("#initState", () => {
        class Foo extends Component {
            constructor(...args) {
                super(...args);
                this.initState({ foo: 1, bar: 2 });
            }

            render() {
                return null;
            }
        }

        class Bar extends Foo {
            constructor(...args) {
                super(...args);
                this.initState({ ted: 3 });
            }
        }

        it("initializes state", () => {
            expect(shallow(<Foo />).state()).toEqual({ foo: 1, bar: 2 });
            expect(shallow(<Bar />).state()).toEqual({ foo: 1, bar: 2, ted: 3 });
        });
    });

    describe("#addUnmountListener", () => {
        const unmountListener = jest.fn();

        class Foo extends Component {
            constructor(...args) {
                super(...args);
                this.initState({ foo: 1, bar: 2 });
            }

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
        it("returns string presentation like [object <ClassName>]", () => {
            expect(new Component().toString()).toBe("[object Component]");
        });

        it("supports modifiers", () => {
            expect(new Component().toString(1, 2, 3)).toBe("[object Component <1, 2, 3>]");
        });
    });
});
