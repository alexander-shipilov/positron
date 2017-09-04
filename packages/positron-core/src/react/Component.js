import { PureComponent } from "react";
import { Base } from "../Base";
import { implement } from "../func";
import { TypedInvariableObject } from "../invariable";
import { toKebabCase, uid } from "../string";

const lifeCycleProps = [
    "defaultProps",
    "propTypes"
];

const lifeCycleMethods = [
    "componentDidMount",
    "componentDidUpdate",
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUnmount",
    "componentWillUpdate"
];

function getProperty(prop) {
    return (target) => target[prop];
}

function isFunction(value) {
    return typeof value === "function";
}

function getComponentMessages() {

}

export class Component extends implement(PureComponent, Base) {
    static get className() {
        return toKebabCase(this.name);
    }

    static get defaultProps() {
        return this._defaultProps || super.defaultProps;
    }

    static set defaultProps(defaultProps) {
        this.define({ _defaultProps: Object.assign({}, super.defaultProps, defaultProps) });
    }

    static get propTypes() {
        return this._propTypes;
    }

    static set propTypes(propTypes) {
        this.define({ _propTypes: Object.assign({}, this.propTypes, propTypes) });
    }

    get className() {
        return this.constructor.className;
    }

    get id() {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("infinity") })._id;
    }

    static implement(...mixins) {
        const superClasses = [this].concat(mixins);
        const superProtos = superClasses.map((superClass) => superClass.prototype);
        const Aggregation = Base.implement.apply(this, mixins);

        lifeCycleProps.forEach((prop) => {
            Aggregation[prop] = Object.assign({}, ...superClasses.map(getProperty(prop)));
        });

        lifeCycleMethods.forEach((method) => {
            const superMethods = superProtos.map((superProto) => superProto[method]).filter(isFunction);

            if (superMethods.length) {
                Aggregation.prototype[method] = function(...args) {
                    superMethods.forEach((superMethod) => {
                        superMethod.apply(this, args);
                    });
                };
            }
        });

        return Aggregation;
    }

    static initMessages(messages) {
        this.messages = TypedInvariableObject.assign(this.messages, messages);
    }

    static initDefaultProps(...defaultProps) {
        this.defaultProps = Object.assign({}, this.defaultProps, ...defaultProps);

        return this;
    }

    static initPropTypes(...propTypes) {
        this.propTypes = Object.assign({}, this.propTypes, ...propTypes);

        return this;
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
        if (!intl) {
            this.warning("intl required");
        }

        return intl ? intl.formatMessage(message, params) : message;
    }

    initState(...states) {
        this.state = Object.assign(this.state || {}, ...states);
    }

    toString(...args) {
        return Base.prototype.toString.call(this, ...args);
    }
}
