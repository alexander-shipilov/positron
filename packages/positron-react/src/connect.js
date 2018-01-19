import { filter, forEach, map, some } from "positron-core";
import { createElement } from "react";
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

function filterConnected(component, nextProps) {
    const { connectedStores: stores, connectedProps: props } = component;

    return filter(nextProps, (value, prop) => !stores.hasOwnProperty(prop) && !props.hasOwnProperty(prop));
}

export class ConnectedComponent extends Component {
    static get connectedProps() {
        return {};
    }

    static get connectedStores() {
        return {};
    }

    get connectedProps() {
        return this.constructor.connectedProps;
    }

    get connectedStores() {
        return this.constructor.connectedStores;
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
            this.props,
            map(connectedStores, ({ state }) => state),
            connectedProps
        ));
    }

    componentWillReceiveProps(props) {
        this.setState(filterConnected(this, props));
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
            return createElement(Component, this.state);
        }
    };
}

export function connect(Component, stores, ...props) {
    if (!ConnectedComponent.isImplementedBy(Component)) {
        Component = createConnected(Component);
    }

    return Component.connect(stores, ...props);
}
