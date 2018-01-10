import { forEach, map, some } from "positron-core";
import React from "react";
import { Component } from "./Component";

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

function createConnected(Component) {
    const connectedStores = {};
    const connectedProps = {};

    return class Connected extends ConnectedComponent {
        static get name() {
            return Component.name;
        }

        static get connectedStores() {
            return connectedStores;
        }

        static get connectedProps() {
            return connectedProps;
        }

        static connect(stores, ...props) {
            if (stores != null && some(stores, (store) => typeof store.addListener !== "function")) {
                throw this.getError("Invalid store");
            }

            Object.assign(connectedStores, stores);
            Object.assign(connectedProps, ...props);

            return this;
        }

        render() {
            return React.createElement(Component, this.state);
        }
    };
}

export function connect(Component, stores, ...props) {
    if (!ConnectedComponent.isImplementedBy(Component)) {
        Component = createConnected(Component);
    }

    return Component.connect(stores, ...props);
}
