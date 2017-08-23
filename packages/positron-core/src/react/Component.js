import { PureComponent } from "react";
import { Base } from "../Base";
import { connect } from "../dataflow";
import { implement } from "../func";

const lifeCycleProps = [
    "defaultProps", "propTypes"
];

const lifeCycleMethods = [
    "init",
    "componentDidMount",
    "componentDidUpdate",
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUnmount",
    "componentWillUpdate"
];

function getProperty(prop) {
    return function(target) {
        return target[prop];
    };
}

function isFunction(value) {
    return typeof value === "function";
}

export class Component extends implement(PureComponent, Base) {
    constructor(...args) {
        super(...args);

        this.init();
    }

    static connect(stores, ...props) {
        return connect(this, stores, ...props);
    }

    static implement(...mixins) {
        const superClasses = [this].concat(mixins);
        const superProtos = superClasses.map((superClass) => superClass.prototype || superClass);
        const Combined = Base.implement.apply(this, mixins);

        lifeCycleProps.forEach((prop) => {
            Combined[prop] = Object.assign({}, ...superClasses.map(getProperty(prop) || null));
        });

        lifeCycleMethods.forEach((method) => {
            const superMethods = superProtos.map((superProto) => superProto[method]).filter(isFunction);

            if (superMethods.length) {
                Combined.prototype[method] = function(...args) {
                    superMethods.forEach((superMethod) => {
                        return superMethod.apply(this, args);
                    });
                };
            }
        });

        return Combined;
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

    initState(...states) {
        this.state = Object.assign(this.state || {}, ...states);
    }

    toString(...args) {
        return Base.prototype.toString.call(this, ...args);
    }
}
