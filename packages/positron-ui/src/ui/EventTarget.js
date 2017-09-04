import { addEventListener } from "positron-core/src/dom-event";

export class EventTarget {
    addEventListener(...args) {
        return this.addUnmountListener(addEventListener(...args));
    }

    addUnmountListener(listener) {
        if (!this.onUnmount) {
            Object.defineProperty(this, "onUnmount", { value: [], writable: true });
        }

        this.onUnmount.push(listener);

        return listener;
    }

    componentWillUnmount() {
        const { onUnmount } = this;

        if (onUnmount) {
            this.onUnmount = null;
            onUnmount.forEach((removeListener) => removeListener());
        }
    }

    removeEventListeners(listeners) {
        listeners.forEach((removeListener) => {
            const index = this.onUnmount.indexOf(removeListener);

            if (index !== -1) {
                this.onUnmount.splice(index, 1);
                removeListener();
            }
        });
    }
}
