import React, { Component as ReactComponent } from "react";
import { Base } from "../Base";
import { PropTypes } from "../prop-types";
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
                init() {
                }

                componentDidMount() {
                }

                componentDidUpdate() {
                }

                componentWillMount() {
                }

                componentWillReceiveProps() {
                }

                componentWillUnmount() {
                }

                componentWillUpdate() {
                }
            }

            Mixin.defaultProps = {
                foo: 0
            };

            Mixin.propTypes = {
                foo: PropTypes.number
            };

            class Foo extends Component.implement(Mixin) {
                render() {
                    return <div />;
                }
            }

            Foo.initPropTypes({ bar: PropTypes.number }).initDefaultProps({ bar: 1 });

            expect(Foo.propTypes).toEqual({ foo: PropTypes.number, bar: PropTypes.number });
            expect(Foo.defaultProps).toEqual({ foo: 0, bar: 1 });
        });
    });
});
