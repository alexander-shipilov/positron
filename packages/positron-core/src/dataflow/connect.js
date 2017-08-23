import { getName } from "../func";
import { every, forEach, map } from "../object";
import { Component as ReactComponent, React } from "../react";
import { Store } from "./Store";

function toString(stores) {
    return "connect("
        + Object.keys(stores).map((prop) => prop + ": " + getName(stores[prop].constructor)).join(", ") + ")";
}

function onStoreChange(target, prop, data) {
    const listeners = target.listeners;

    if (listeners && listeners.hasOwnProperty(prop)) {
        target.setState({ [prop]: data });
    }
}

export function connect(Component, stores, ...props) {
    const connectedStores = {};
    const connectedProps = {};

    function connectProps(stores, ...props) {
        if (!every(stores, (store) => store instanceof Store)) {
            throw new TypeError("Store expected");
        }

        Object.assign(connectedStores, stores);
        Object.assign(connectedProps, ...props);
    }

    connectProps(stores, ...props);

    return class extends ReactComponent {
        static get name() {
            return Component.name;
        }

        static toString(...args) {
            return super.toString(toString(connectedStores), ...args);
        }

        static connect(stores, ...props) {
            connectProps(stores, ...props);

            return this;
        }

        componentWillReceiveProps(nextProps) {
            this.setState(nextProps);
        }

        componentWillMount() {
            this.listeners = map(connectedStores,
                (store, prop) => store.addListener(onStoreChange.bind(null, this, prop)));

            this.setState(Object.assign({}, this.props, connectedProps,
                this.state, map(connectedStores, (store) => store.state)));
        }

        componentWillUnmount() {
            forEach(this.listeners, (listener) => listener());
            this.listeners = null;
        }

        render() {
            return React.createElement(Component, this.state);
        }
    };
}
