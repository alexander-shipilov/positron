import { Base, implement, toKebabCase, uid } from "positron-core";
import { TypedImmutableObject } from "positron-immutable";
import { PureComponent } from "react";


export class Component extends implement(PureComponent, Base) {
    static get className() {
        return toKebabCase(this.name);
    }

    get className() {
        return this.constructor.className;
    }

    get id() {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("positron") })._id;
    }

    static initMessages(messages) {
        this.messages = TypedImmutableObject.assign(this.messages, messages);
    }

    static toString(...args) {
        return Base.toString.call(this, ...args);
    }

    addUnmountListener(listener) {
        if (!this.unmountListeners) {
            this.define({ unmountListeners: [] });
        }

        this.unmountListeners.push(listener);

        return listener;
    }

    componentWillUnmount() {
        const { unmountListeners } = this;

        if (unmountListeners) {
            this.unmountListeners = void 0;
            unmountListeners.forEach((removeListener) => removeListener());
        }
    }

    formatMessage(message, params) {
        const { intl } = this.props;

        message = this.className + (message ? "-" + message : "");

        if (intl) {
            message = intl.formatMessage(message, params);
        } else {
            this.warning("intl required");
        }

        return message;
    }

    toString(...args) {
        return Base.prototype.toString.call(this, ...args);
    }
}
