import React from "react";
import { isImplementationOf } from "../func";
import { every, forEach, map } from "../object";
import { Component } from "../react";
import { Store } from "./Store";

function toString(props) {
    const string = Object.keys(props).map((key) => `${ key }: ${ props[key] }`).join(", ");

    return string ? `{ ${ string } }` : "{}";
}

function onStoreChange(target, prop, data) {
    if (target.connected) {
        target.setState({ [prop]: data });
    }
}

export class ConnectedComponent extends Component {
    static get connectedStores() {
        return {};
    }

    static get connectedProps() {
        return {};
    }

    static toString(...args) {
        const { connectedStores, connectedProps } = this;

        return super.toString(toString(connectedStores), toString(connectedProps), ...args);
    }

    componentWillMount() {
        const { connectedStores, connectedProps } = this.constructor;

        this.define({ connected: true });
        forEach(connectedStores, (store, prop) => {
            this.addUnmountListener(store.addListener(onStoreChange.bind(null, this, prop)));
        });

        this.setState(Object.assign({},
            connectedProps,
            this.props,
            this.state,
            map(connectedStores, ({ state }) => state)
        ));
    }

    componentWillUnmount() {
        this.define({ connected: void 0 });
        super.componentWillUnmount();
    }
}

function createConnectedComponent(Component) {
    const connectedStores = {};
    const connectedProps = {};

    function connect(stores, ...props) {
        if (stores !== null && stores !== void 0 && !every(stores, (store) => store instanceof Store)) {
            throw new TypeError("Store expected");
        }

        Object.assign(connectedStores, stores);
        Object.assign(connectedProps, ...props);
    }

    return class Connected extends ConnectedComponent {
        static get connectedStores() {
            return connectedStores;
        }

        static get connectedProps() {
            return connectedProps;
        }

        static connect(stores, ...props) {
            connect(stores, ...props);

            return this;
        }

        render() {
            return React.createElement(Component, this.state);
        }
    };
}

export function connect(Component, stores, ...props) {
    if (!isImplementationOf(Component, ConnectedComponent)) {
        Component = createConnectedComponent(Component);
    }

    return Component.connect(stores, ...props);
}
