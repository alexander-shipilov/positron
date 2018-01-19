import { Base } from "../../../positron-core/src/Base";

export class AbstractConnector extends Base {
    create(value, data = null) {
        return Promise.resolve(value);
    }

    delete(value, params = null) {
        return Promise.resolve(value);
    }

    read(params = null) {
        return Promise.resolve(null);
    }

    update(value, data = null) {
        return Promise.resolve(value);
    }
}
