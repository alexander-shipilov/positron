import { Component, React } from "../react";
import { connect } from "./connect";
import { Store } from "./Store";

describe("connect", () => {
    it("connects a component to the passed stores", () => {
        const Connected = connect(Component, { data: new Store({ foo: 1, bar: 2 }) });

        expect(Connected.isImplementationOf(React.Component)).toBeTruthy();
    });

    it("should throw an error if one or more passed objects is not a Store", () => {
        expect(() => connect(Component, { data: null })).toThrow();
    });
});
