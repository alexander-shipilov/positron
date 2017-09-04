import { Base } from "../Base";

export class AbstractConnector extends Base {
    create(value, data = null) {
        return Promise.resolve(value);
    }

    destroy(value, params = null) {
        return Promise.resolve(value);
    }

    read(params = null) {
        return Promise.resolve(null);
    }

    update(value, data = null) {
        return Promise.resolve(value);
    }

    valueOf(...props) {
        return Object.assign({}, this, this.pick(...props));
    }
}
