// @flow

import { filter, forEach, map } from "positron-core";
import { Component } from "./Component";

function toString(props: Object): string {
    const string = Object.keys(props).map((key) => `${ key }: ${ props[key] }`).join(", ");

    return string ? `{ ${ string } }` : "{}";
}

function onStoreChange(target: ConnectedComponent<any, any>, prop: string, data: any) {
    if (target.connected) {
        target.setState({ [prop]: data });
    }
}

function filterConnected(component, nextProps) {
    const { connectedStores: stores, connectedProps: props } = component;

    return filter(nextProps, (value, prop) => !stores.hasOwnProperty(prop) && !props.hasOwnProperty(prop));
}

export class ConnectedComponent<P, S> extends Component<P, S> {
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

    connected: boolean;

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
