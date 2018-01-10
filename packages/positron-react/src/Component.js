import { Base, implement, toKebabCase, uid } from "positron-core";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { ComponentRenderer } from "./ComponentRenderer";


export class Component extends implement(PureComponent, Base) {
    static propTypes = {
        renderer: PropTypes.instanceOf(ComponentRenderer).isRequired
    };

    static messages = {
    };

    static get className() {
        return toKebabCase(this.name);
    }

    get className() {
        return this.constructor.className;
    }

    get id() {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("positron") })._id;
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

    render() {
        this.props.renderer.render();
    }

    toString(...args) {
        return Base.prototype.toString.call(this, ...args);
    }
}
