// @flow

import { Base, forEach, implement, uid } from "positron-core";
import { addEventListener } from "positron-dom";
import * as React from "react";

export type ComponentReference<P: any, S: any> = (Element | React.Component<P, S>) => Element | React.Component<P, S>;

export class Component<P, S> extends implement(React.PureComponent, Base) {
    static toString(...args: any[]): string {
        return Base.toString.call(this, ...args);
    }

    props: P;

    state: S;

    references: {[string]: ComponentReference<any, any>};

    get id(): string {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("id") })._id;
    }

    addDOMListener(element: Element, event: string, handler: (Event) => void, capture?: boolean = false): () => void {
        return this.addUnmountListener(addEventListener(element, event, handler, capture));
    }

    removeDOMListener(removeListener: () => void) {
        this.removeUnmountListener(removeListener);
        removeListener();
    }

    addUnmountListener(listener: (...any[]) => void) {
        if (!this.unmountListeners) {
            this.define({ unmountListeners: [] });
        }

        this.unmountListeners.push(listener);

        return listener;
    }

    removeUnmountListener(listener: (...any[]) => void) {
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

    ref(name: string): () => ComponentReference<any, any> {
        if (!this.references) {
            this.references = this.define({ references: {} });
        }

        return this.references[name] = (el) => this[name] = el;
    }

    toString(...args: any[]): string {
        return Base.prototype.toString.call(this, ...args);
    }
}
