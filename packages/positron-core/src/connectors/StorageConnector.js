import { isDefined, valueOf } from "../object";
import { AbstractConnector } from "./AbstractConnector";

export class StorageConnector extends AbstractConnector {
    get storage() {
        return this._storage;
    }

    set storage(storage) {
        if (!storage) {
            throw this.getError("Storage expected");
        }

        this.define({ _storage: storage });
    }

    get storageKey() {
        return this._storageKey;
    }

    set storageKey(storageKey) {
        if (!storageKey) {
            throw this.getError("Storage key expected");
        }

        this.define({ _storageKey: storageKey });
    }

    static parse(value) {
        return isDefined(value) ? JSON.parse(value) : null;
    }

    static stringify(value) {
        return isDefined(value) ? JSON.stringify(valueOf(value)) : null;
    }

    create(entity) {
        return Promise.resolve(this.setItem(entity));
    }

    destroy() {
        return Promise.resolve(this.setItem(null));
    }

    getItem() {
        return this.parse(this.storage.getItem(this.storageKey));
    }

    parse(value) {
        return this.constructor.parse(value);
    }

    read() {
        return Promise.resolve(this.getItem());
    }

    setItem(value) {
        const storage = this.storage;
        const string = this.stringify(value);

        if (string === null) {
            storage.removeItem(this.storageKey);
        } else {
            storage.setItem(this.storageKey, string);
        }

        return value;
    }

    stringify(value) {
        return this.constructor.stringify(value);
    }

    update(entity) {
        return Promise.resolve(this.setItem(entity));
    }

    valueOf() {
        return super.valueOf("storage", "storageKey");
    }

    toString() {
        const { storage, storageKey } = this;

        return super.toString(storage && storage.constructor.name, storageKey);
    }
}
