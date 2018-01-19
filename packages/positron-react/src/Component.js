import { Base, forEach, implement, uid } from "positron-core";
import { BEMClassifier } from "positron-dom";
import { IntlFormatter, IntlOwner } from "positron-intl";
import { isClass, PropsOwner } from "positron-prop-types";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { ComponentRenderer } from "./ComponentRenderer";

export class Component extends implement(PureComponent, Base, PropsOwner, IntlOwner, BEMClassifier) {
    static propTypes = {
        intl: PropTypes.instanceOf(IntlFormatter),
        renderer: isClass(ComponentRenderer)
    };

    static messages = {};

    get id() {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("id") })._id;
    }

    get intl() {
        return this.props.intl;
    }

    static toString(...args) {
        return Base.toString.call(this, ...args);
    }

    block(mods = null, ...other) {
        return super.block(mods, ...other, this.props.className);
    }

    addDOMListener(...args) {
        return this.addUnmountListener(addEventListener(...args));
    }

    addUnmountListener(listener) {
        if (!this.unmountListeners) {
            this.define({ unmountListeners: [] });
        }

        this.unmountListeners.push(listener);

        return listener;
    }

    removeUnmountListener(listener) {
        if (this.unmountListeners) {
            this.unmountListeners = this.unmountListeners.filter((unmountListener) => unmountListener !== listener);
        }
    }

    componentWillUnmount() {
        const { unmountListeners, references } = this;

        if (unmountListeners) {
            this.unmountListeners = void 0;
            unmountListeners.forEach((removeListener) => removeListener());
        }

        if (references) {
            this.references = void 0;

            forEach(references, (el, ref) => {
                delete this[ref];
            });
        }
    }

    ref(name) {
        if (!this.references) {
            this.references = this.define({ references: {} });
        }

        return this.references[name] = (el) => this[name] = el;
    }

    render() {
        const { renderer } = this.props;

        if (!renderer) {
            this.warning("requires renderer");
        }

        return renderer ? renderer.render(this) : null;
    }

    toString(...args) {
        return Base.prototype.toString.call(this, ...args);
    }
}
