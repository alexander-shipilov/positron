import { Model } from "model";

export class AuthModel extends Model {
    get isGuest() {
        return this.user == null;
    }

    constructor(...args) {
        super({ user: null }, ...args);
    }
}
