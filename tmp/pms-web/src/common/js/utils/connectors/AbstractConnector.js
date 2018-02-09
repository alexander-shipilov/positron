import { Base } from "positron-core";

export class AbstractConnector extends Base {
    create(value) {
        return Promise.resolve(value);
    }

    destroy(value) {
        return Promise.resolve(value);
    }

    read(params = null) {
        return Promise.resolve(null);
    }

    update(value) {
        return Promise.resolve(value);
    }
}
