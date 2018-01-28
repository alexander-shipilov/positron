// @flow

import { some } from "positron-core";
import * as React from "react";
import { ConnectedComponent } from "./ConnectedComponent";

function createConnected<P, S>(Component: React.Component<P, S>): ConnectedComponent<P, S> {
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
