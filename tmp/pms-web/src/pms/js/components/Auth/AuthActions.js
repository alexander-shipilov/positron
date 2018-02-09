import { Action } from "positron-flow";

export class AuthActions {
    constructor() {
        Object.assign(this, {
            login: new Action(),
            logout: new Action()
        });
    }
}
